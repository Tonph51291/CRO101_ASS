import Colors from "@/constants/Colors";
import icon from "@/constants/icon";
import image from "@/constants/image";
import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function CartItem(props: any) {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View>
      {/* price != 1  */}
      <View style={styles.container}>
        <View style={styles.containerImg}>
          <Image
            style={styles.styleImg}
            source={require("@/assets/images/image5.png")}
          />
          <View style={{ marginStart: 10 }}>
            <Text style={styles.textName}>Cappuccino</Text>
            <Text style={styles.textSpecialIngredient}>With Steamed Milk</Text>
            <TouchableOpacity style={styles.buttonSize}>
              <Text style={styles.textButton}>Medium Roasted</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.soLuongContainer}>
          <TouchableOpacity style={styles.buttonSizes}>
            <Text style={{ color: "white", fontSize: 20 }}>S</Text>
          </TouchableOpacity>

          <Text
            style={{
              color: Colors.orange,
              fontSize: 20,
              fontWeight: "600",
              alignSelf: "center",
            }}
          >
            $ <Text style={{ color: "white" }}>4.20</Text>
          </Text>

          <TouchableOpacity
            style={{
              backgroundColor: Colors.orange,
              justifyContent: "center",
              alignItems: "center",
              width: 40,
              borderRadius: 5,
            }}
            onPress={increaseQuantity}
          >
            <Icon name="plus" style={{ color: "white" }} size={20} />
          </TouchableOpacity>
          <View
            style={{
              width: 70,
              borderColor: "#D17842",
              borderWidth: 1,
              borderRadius: 7,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.textSoLuong}>{quantity}</Text>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: Colors.orange,
              justifyContent: "center",
              alignItems: "center",
              width: 40,
              borderRadius: 5,
            }}
            onPress={decreaseQuantity}
          >
            <Icon name="minus" style={{ color: "white" }} size={20} />
          </TouchableOpacity>
        </View>
        <View style={styles.soLuongContainer}>
          <TouchableOpacity style={styles.buttonSizes}>
            <Text style={{ color: "white", fontSize: 20 }}>S</Text>
          </TouchableOpacity>

          <Text
            style={{
              color: Colors.orange,
              fontSize: 20,
              fontWeight: "600",
              alignSelf: "center",
            }}
          >
            $ <Text style={{ color: "white" }}>4.20</Text>
          </Text>

          <TouchableOpacity
            style={{
              backgroundColor: Colors.orange,
              justifyContent: "center",
              alignItems: "center",
              width: 40,
              borderRadius: 5,
            }}
          >
            <Icon name="plus" style={{ color: "white" }} size={20} />
          </TouchableOpacity>
          <View
            style={{
              width: 70,
              borderColor: "#D17842",
              borderWidth: 1,
              borderRadius: 7,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.textSoLuong}>1</Text>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: Colors.orange,
              justifyContent: "center",
              alignItems: "center",
              width: 40,
              borderRadius: 5,
            }}
          >
            <Icon name="minus" style={{ color: "white" }} size={20} />
          </TouchableOpacity>
        </View>
        <View style={styles.soLuongContainer}>
          <TouchableOpacity style={styles.buttonSizes}>
            <Text style={{ color: "white", fontSize: 20 }}>S</Text>
          </TouchableOpacity>

          <Text
            style={{
              color: Colors.orange,
              fontSize: 20,
              fontWeight: "600",
              alignSelf: "center",
            }}
          >
            $ <Text style={{ color: "white" }}>4.20</Text>
          </Text>

          <TouchableOpacity
            style={{
              backgroundColor: Colors.orange,
              justifyContent: "center",
              alignItems: "center",
              width: 40,
              borderRadius: 5,
            }}
          >
            <Icon name="plus" style={{ color: "white" }} size={20} />
          </TouchableOpacity>
          <View
            style={{
              width: 70,
              borderColor: "#D17842",
              borderWidth: 1,
              borderRadius: 7,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.textSoLuong}>1</Text>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: Colors.orange,
              justifyContent: "center",
              alignItems: "center",
              width: 40,
              borderRadius: 5,
            }}
          >
            <Icon name="minus" style={{ color: "white" }} size={20} />
          </TouchableOpacity>
        </View>
      </View>

      {/* price = 1 */}
      <View style={styles.container}>
        <View style={styles.containerImg}>
          <Image
            style={styles.styleImgPrice}
            source={require("@/assets/images/image5.png")}
          />
          <View style={{ marginStart: 10 }}>
            <Text style={styles.textName}>Cappuccino</Text>
            <Text style={styles.textSpecialIngredient}>With Steamed Milk</Text>
            <View style={{ flexDirection: "row", marginVertical: 5 }}>
              <TouchableOpacity style={styles.buttonSizePrice}>
                <Text style={{ color: "white", fontSize: 20 }}>250ml</Text>
              </TouchableOpacity>

              <Text
                style={{
                  color: Colors.orange,
                  fontSize: 20,
                  fontWeight: "600",
                  alignSelf: "center",
                  marginStart: 20,
                }}
              >
                $ <Text style={{ color: "white" }}>4.20</Text>
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: "80%",
                height: 40,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.orange,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 40,
                  borderRadius: 5,
                }}
              >
                <Icon name="plus" style={{ color: "white" }} size={20} />
              </TouchableOpacity>
              <View
                style={{
                  width: 70,
                  borderColor: "#D17842",
                  borderWidth: 1,
                  borderRadius: 7,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={styles.textSoLuong}>1</Text>
              </View>

              <TouchableOpacity
                style={{
                  backgroundColor: Colors.orange,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 40,
                  borderRadius: 5,
                }}
              >
                <Icon name="minus" style={{ color: "white" }} size={20} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkGray,
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  containerImg: {
    flexDirection: "row",
  },
  styleImg: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  textName: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "poppins",
  },
  textSpecialIngredient: {
    color: "#AEAEAE",
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "poppins",
  },
  textButton: {
    color: "white",
  },
  buttonSize: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#141921",
  },
  soLuongContainer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
  },
  buttonSizes: {
    width: 80,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#141921",
  },
  buttonSizePrice: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#141921",
    paddingHorizontal: 30,
  },
  textSoLuong: {
    fontSize: 20,
    color: "white",
    fontWeight: "600",
  },
  styleImgPrice: {
    width: 140,
    height: 140,
    borderRadius: 20,
  },
});
