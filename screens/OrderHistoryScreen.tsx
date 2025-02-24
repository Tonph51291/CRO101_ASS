import { UIHeader } from "@/components";
import { icon } from "@/constants";
import Colors from "@/constants/Colors";
import image from "@/constants/image";
import { getPaymentById } from "@/repositories/apiPayment";
import { BASE_URL } from "@/repositories/baseURL";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useCallback, useState } from "react";
import { FlatList } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";

export default function OrderHistoryScreen() {
  const [listPayment, setListPayment] = useState<any[]>([]);

  const sumPriceItem = (price: string, quantity: number) => {
    const priceNumber = parseFloat(price); // Chuyển string thành số
    return priceNumber * quantity;
  };

  const fetchPayment = async () => {
    try {
      const userId = await AsyncStorage.getItem("userId");
      if (!userId) {
        alert("Vui lòng đăng nhập trước!");
        return;
      }
      const responseData = await getPaymentById(userId);
      setListPayment(responseData);
    } catch (error) {
      console.log(error);
    }
  };
  useFocusEffect(
    useCallback(() => {
      fetchPayment();
    }, [])
  );
  console.log(listPayment);
  return (
    <View style={styles.container}>
      <UIHeader
        iconLeft={icon.menu}
        title="Order History"
        iconRight={image.ton}
      />
      <FlatList
        data={listPayment}
        keyExtractor={(item) => item.id + ""}
        renderItem={({ item }) => {
          console.log(item.details[0].prices);
          return (
            <View>
              <View style={styles.dateContainer}>
                <View>
                  <Text style={styles.textDate}>Order Date</Text>
                  <Text style={styles.textTimeOder}>{item.date}</Text>
                </View>
                <View style={{ alignItems: "flex-end" }}>
                  <Text style={styles.textDate}>Order Date</Text>
                  <Text style={styles.textPrice}>
                    {" "}
                    {Number(item.amount).toFixed(2)}
                  </Text>
                </View>
              </View>
              {item.details.map((item: any, index: any) => (
                <View>
                  <LinearGradient
                    colors={["#262B33", "#262B330"]}
                    style={styles.containerCard}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        style={styles.styleImage}
                        source={{ uri: `${BASE_URL}/${item.imagelink_square}` }}
                      />
                      <View>
                        <Text style={styles.textName}>{item.name}</Text>
                        <Text style={styles.textTitle}>With Steamed Milk</Text>
                      </View>
                      <Text style={styles.textPriceTitle}>
                        ${" "}
                        <Text style={{ color: "white" }}>
                          {" "}
                          {Number(item.itemPrice).toFixed(2)}
                        </Text>
                      </Text>
                    </View>
                    {item.prices.map((item: any, index: any) => (
                      <View style={styles.containerQuality}>
                        <View style={styles.containerSumPriceAndSize}>
                          <View style={styles.backContainerSize}>
                            <Text style={styles.textSize}>{item.size}</Text>
                          </View>
                          <View style={styles.backContainerSumPrice}>
                            <Text style={styles.textSumPrice}>
                              ${" "}
                              <Text style={{ color: "white" }}>
                                {item.price}
                              </Text>
                            </Text>
                          </View>
                        </View>

                        <Text style={styles.textSumPrice}>
                          X{" "}
                          <Text style={{ color: "white" }}>
                            {item.quantity}
                          </Text>
                        </Text>
                        <Text style={styles.textSumPrice}>
                          {sumPriceItem(item.price, item.quantity)}
                        </Text>
                      </View>
                    ))}
                  </LinearGradient>
                </View>
              ))}
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.brightRed,
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  textDate: {
    color: "white",
    fontSize: 17,
    fontWeight: "600",
  },
  textTimeOder: {
    color: "white",
    fontSize: 17,
    fontWeight: "400",
  },

  textPrice: {
    color: Colors.orange,
    fontSize: 17,
    fontWeight: "400",
  },
  containerCard: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  styleImage: {
    width: 80,
    height: 80,
    borderRadius: 20,
  },
  titleContainer: {},
  titleTextContainer: {},
  textName: {
    color: "white",
    fontWeight: "400",
    fontSize: 20,
  },
  textTitle: { color: "white", fontWeight: "400", fontSize: 15 },
  textPriceTitle: {
    color: Colors.orange,
    fontSize: 25,
    fontWeight: "bold",
  },
  containerQuality: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingEnd: 10,
    marginTop: 10,
    alignItems: "center",
  },
  containerSumPriceAndSize: { flexDirection: "row" },
  backContainerSize: {
    backgroundColor: "#0C0F14",
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },

  backContainerSumPrice: {
    backgroundColor: "#0C0F14",
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    marginLeft: 1,
    paddingVertical: 5,
  },

  textSize: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
  },
  textQuality: {},
  textSumPrice: {
    color: Colors.orange,
    fontSize: 20,
    fontWeight: "600",
  },
});
