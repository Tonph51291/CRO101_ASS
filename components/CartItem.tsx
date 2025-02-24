import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Colors from "@/constants/Colors";
import { updateQuantityOnAPI } from "@/repositories/apiCart";
import { BASE_URL } from "@/repositories/baseURL";

export default function CartItem({
  item,
  updateTotalPrice,
  openModal,
  incrementQuantity,
  decrementQuantity,
}: any) {
  // State quản lý số lượng từng sản phẩm dựa vào id + size

  return (
    <>
      {item.item.items.map((product: any, index: number) =>
        product.prices.length != 1 ? (
          <TouchableOpacity
            style={styles.container}
            key={index}
            onLongPress={() => {
              openModal(product, item.item.id);
            }}
          >
            <View style={styles.containerImg}>
              <Image
                style={styles.styleImg}
                source={{ uri: `${BASE_URL}/${product.imagelink_square}` }}
              />
              <View style={{ marginStart: 10 }}>
                <Text style={styles.textName}>{product.name}</Text>
                <Text style={styles.textSpecialIngredient}>
                  With Steamed Milk
                </Text>
              </View>
            </View>

            {product.prices.map((data: any, idx: number) => {
              return (
                <View style={styles.soLuongContainer} key={idx}>
                  <TouchableOpacity style={styles.buttonSizes}>
                    <Text style={{ color: "white", fontSize: 20 }}>
                      {data.size}
                    </Text>
                  </TouchableOpacity>

                  <Text
                    style={{
                      color: Colors.orange,
                      fontSize: 20,
                      fontWeight: "600",
                      alignSelf: "center",
                    }}
                  >
                    $ <Text style={{ color: "white" }}>{data.price}</Text>
                  </Text>

                  {/* Nút giảm số lượng */}
                  <TouchableOpacity
                    style={{
                      backgroundColor: Colors.orange,
                      justifyContent: "center",
                      alignItems: "center",
                      width: 40,
                      borderRadius: 5,
                    }}
                    onPress={() =>
                      decrementQuantity(
                        item.item.id,
                        product.productId,
                        data.size
                      )
                    }
                  >
                    <Icon name="minus" style={{ color: "white" }} size={20} />
                  </TouchableOpacity>

                  {/* Hiển thị số lượng */}
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
                    <Text style={styles.textSoLuong}>{data.quantity}</Text>
                  </View>

                  {/* Nút tăng số lượng */}
                  <TouchableOpacity
                    style={{
                      backgroundColor: Colors.orange,
                      justifyContent: "center",
                      alignItems: "center",
                      width: 40,
                      borderRadius: 5,
                    }}
                    onPress={() =>
                      incrementQuantity(
                        item.item.id,
                        product.productId,
                        data.size
                      )
                    }
                  >
                    <Icon name="plus" style={{ color: "white" }} size={20} />
                  </TouchableOpacity>
                </View>
              );
            })}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.container}
            key={index}
            onLongPress={() => {
              openModal(product, item.item.id);
            }}
          >
            <View style={styles.containerImg}>
              <Image
                style={styles.styleImgPrice}
                source={{
                  uri: `${BASE_URL}/${product.imagelink_square}`,
                }}
              />
              <View style={{ marginStart: 10 }}>
                <Text style={styles.textName}>{product.name}</Text>
                <Text style={styles.textSpecialIngredient}>
                  With Steamed Milk
                </Text>
                <View style={{ flexDirection: "row", marginVertical: 5 }}>
                  <TouchableOpacity style={styles.buttonSizePrice}>
                    <Text style={{ color: "white", fontSize: 20 }}>
                      {product.prices[0].size}
                    </Text>
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
                    ${" "}
                    <Text style={{ color: "white" }}>
                      {product.prices[0].price}
                    </Text>
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
                    onPress={() =>
                      incrementQuantity(
                        item.item.id,
                        product.productId,
                        product.prices[0].size
                      )
                    }
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
                    <Text style={styles.textSoLuong}>
                      {product.prices[0].quantity}
                    </Text>
                  </View>

                  <TouchableOpacity
                    style={{
                      backgroundColor: Colors.orange,
                      justifyContent: "center",
                      alignItems: "center",
                      width: 40,
                      borderRadius: 5,
                    }}
                    onPress={() =>
                      decrementQuantity(
                        item.item.id,
                        product.productId,
                        product.prices[0].size
                      )
                    }
                  >
                    <Icon name="minus" style={{ color: "white" }} size={20} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )
      )}
    </>
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
