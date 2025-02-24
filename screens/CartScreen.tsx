import { UIHeader } from "@/components";
import Colors from "@/constants/Colors";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from "react-native";
import icon from "@/constants/icon";
import image from "@/constants/image";
import CartItem from "@/components/CartItem";
import { Children, useCallback, useEffect, useState } from "react";
import {
  removeProductFromCart,
  getListCart,
  updateCartById,
  getCartByUserId,
} from "@/repositories/apiCart";
import { TouchableOpacity } from "react-native";
import { Modal } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
interface Cart {
  id: string;
  userId: string;
  items: {
    productId: string;
    name: string;
    roasted: string;
    imagelink_square: string;
    special_ingredient: string;
    prices: {
      size: string;
      price: string;
      currency: string;
      quantity: number;
    }[];
    type: string;
    index: number;
  }[];
}

export default function CartScreen({ navigation }: any) {
  const [cart, setListCart] = useState<Cart[]>([]);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [cartPrice, setCartPrice] = useState<number>(0);

  // State quản lý modal
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [idCart, setIdCart] = useState("");
  const fetchCart = async () => {
    const userId = await AsyncStorage.getItem("userId");
    if (!userId) {
      alert("Vui lòng đăng nhập trước!");
      return;
    }

    const responseData = await getCartByUserId(userId);

    setListCart(responseData);
    if (responseData.length > 0) {
      setCartItems(responseData[0].items); // Lấy items từ giỏ hàng đầu tiên
      calculateCartPrice(responseData[0].items);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchCart();
    }, [])
  );

  const openModal = (item: any, idCart: any) => {
    console.log("Item được nhấn:", idCart); // Kiểm tra item có nhận được dữ liệu không
    setSelectedItem(item);
    setIdCart(idCart);

    setModalVisible(true);
  };

  // Hàm đóng modal
  const closeModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };

  // Hàm cập nhật tổng tiền

  const handleDeleteProduct = async (cartId: string, productId: any) => {
    const success = await removeProductFromCart(cartId, productId);
    if (success) {
      fetchCart();
      ToastAndroid.show("Xóa thành công ", ToastAndroid.BOTTOM);
      console.log("Đã xóa sản phẩm thành công!");
      // Cập nhật lại giao diện hoặc danh sách giỏ hàng nếu cần
      closeModal();
    } else {
      console.log("Xóa sản phẩm thất bại!");
    }
  };
  const calculateCartPrice = (items: any[]) => {
    const total = items.reduce((sum, item) => {
      const itemTotal = item.prices.reduce((subSum: number, p: any) => {
        return subSum + parseFloat(p.price) * (p.quantity || 0);
      }, 0);
      return sum + itemTotal;
    }, 0);
    setCartPrice(total);
  };
  const incrementCartItemQuantityHandler = async (
    idCart: string,
    productId: string,
    size: string
  ) => {
    console.log(productId, size);
    console.log("cart ", idCart);
    try {
      if (!cart) return;
      const updatedItems = cartItems.map((item) => {
        if (item.productId === productId) {
          const updatedPrices = item.prices.map((p: any) => {
            if (p.size === size) {
              return { ...p, quantity: (p.quantity || 0) + 1 };
            }
            return p;
          });
          return { ...item, prices: updatedPrices };
        }
        return item;
      });
      await updateCartById(idCart, updatedItems);
      setCartItems(updatedItems);
      calculateCartPrice(updatedItems);
      fetchCart();
    } catch (error) {
      console.error(error);
    }
  };

  const decrementCartItemQuantityHandler = async (
    idCart: string,
    productId: string,
    size: string
  ) => {
    console.log(productId, size);
    console.log("cart ", idCart);

    try {
      if (!cart) return;

      let updatedItems = cartItems.map((item) => {
        if (item.productId === productId) {
          const updatedPrices = item.prices.map((p: any) => {
            if (p.size === size) {
              const newQuantity = Math.max((p.quantity || 0) - 1, 0);
              return { ...p, quantity: newQuantity };
            }
            return p;
          });

          return { ...item, prices: updatedPrices };
        }
        return item;
      });

      // Lọc ra các size có số lượng > 0
      updatedItems = updatedItems
        .map((item) => ({
          ...item,
          prices: item.prices.filter((p: any) => p.quantity > 0),
        }))
        .filter((item) => item.prices.length > 0);

      // Kiểm tra xem có sản phẩm nào bị giảm về 0 không
      const isItemRemoved = cartItems.some((item) =>
        item.prices.some((p: any) => p.size === size && p.quantity === 1)
      );

      if (isItemRemoved) {
        Alert.alert(
          "Xóa sản phẩm?",
          "Số lượng sản phẩm đã về 0. Bạn có muốn xóa sản phẩm này khỏi giỏ hàng không?",
          [
            { text: "Hủy", style: "cancel" },
            {
              text: "Xóa",
              onPress: async () => {
                // Gửi cập nhật lên API nếu người dùng đồng ý xóa
                await updateCartById(idCart, updatedItems);
                setCartItems(updatedItems);
                calculateCartPrice(updatedItems);
              },
            },
          ]
        );
      } else {
        // Nếu không có sản phẩm nào về 0, cập nhật giỏ hàng bình thường
        await updateCartById(idCart, updatedItems);
        setCartItems(updatedItems);
        calculateCartPrice(updatedItems);
        fetchCart();
      }
    } catch (error) {
      console.error("Lỗi khi cập nhật giỏ hàng:", error);
    }
  };

  const thanhToan = () => {
    if (cart[0].items.length === 0) {
      ToastAndroid.show(
        "Không có sản phẩm nào để thanh toán ",
        ToastAndroid.BOTTOM
      );
      return;
    }
    const details = [
      ...cartItems.map((item) => {
        return {
          productId: item.productId,
          name: item.name,
          imagelink_square: item.imagelink_square,
          special_ingredient: item.special_ingredient,
          prices: item.prices,
          type: item.type,
          itemPrice: item.prices.reduce(
            (sum: number, p: any) =>
              sum + parseFloat(p.price) * (p.quantity || 0),
            0
          ),
        };
      }),
    ];
    console.log(cartItems);
    navigation.push("Payment", { amount: cartPrice, details: details });
  };

  const chuyenTrang = () => {
    navigation.push("Payment");
  };

  return (
    <View style={styles.container}>
      <UIHeader iconLeft={icon.menu} iconRight={image.ton} title="Cart" />
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={(item) => {
          return (
            <CartItem
              item={item}
              openModal={openModal}
              incrementQuantity={incrementCartItemQuantityHandler}
              decrementQuantity={decrementCartItemQuantityHandler}
            />
          );
        }}
      />
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "#AEAEAE", fontSize: 16 }}>Total Price</Text>
          <Text
            style={{
              color: Colors.orange,
              fontSize: 20,
              fontWeight: "700",
            }}
          >
            {" "}
            ${" "}
            <Text style={{ color: "white" }}>
              {Number(cartPrice).toFixed(2)}
            </Text>
          </Text>
        </View>
        <TouchableOpacity style={styles.buttonAdd} onPress={thanhToan}>
          <Text style={{ color: "#FFFFFF", fontWeight: "900" }}>Pay</Text>
        </TouchableOpacity>
      </View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>
              Bạn có muốn xóa sản phẩm khỏi giỏ hàng
            </Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.noButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.noText}>No</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.yesButton]}
                onPress={() => {
                  handleDeleteProduct(idCart, selectedItem?.productId);

                  closeModal();
                }}
              >
                <Text style={styles.yesText}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.brightRed,
    flex: 1,
  },
  buttonAdd: {
    backgroundColor: Colors.orange,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    borderRadius: 10,
  },

  modalContainer: {
    width: 300,
    backgroundColor: "#121212",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  noButton: {
    backgroundColor: "transparent",
  },
  yesButton: {
    backgroundColor: "#D47F4E",
    marginLeft: 10,
  },
  noText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  yesText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
});
