import { UIHeader } from "@/components";
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
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { addPayment } from "@/repositories/apiPayment";
import { getCartByUserId, updateCartById } from "@/repositories/apiCart";

const formatDate = (date: Date): string => {
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  let suffix = "th";
  if (day % 10 === 1 && day % 100 !== 11) {
    suffix = "st";
  } else if (day % 10 === 2 && day % 100 !== 12) {
    suffix = "nd";
  } else if (day % 10 === 3 && day % 100 !== 13) {
    suffix = "rd";
  }
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${day}${suffix} ${month} ${year}, ${formattedHours}:${formattedMinutes}`;
};

export default function PaymentScreen({ navigation, route }: any) {
  console.log(route.params);
  const handlePayment = async () => {
    try {
      const userId = await AsyncStorage.getItem("userId");
      if (!userId) {
        alert("Vui lòng đăng nhập trước!");
        return;
      }
      const paymentData = {
        userId: userId || "",
        amount: route.params.amount,
        date: formatDate(new Date()),
        status: "completed",
        paymentMode: "Credit Card",
        details: route.params.details,
      };
      // Gửi dữ liệu thanh toán lên server
      console.log(paymentData);
      await addPayment(paymentData);

      // Sau khi đặt hàng thành công, lấy cart của user và xóa hết các sản phẩm trong giỏ hàng
      const cartRes = await getCartByUserId(userId);
      console.log("Cart res", cartRes.length);
      if (cartRes && cartRes.length > 0) {
        const cart = cartRes[0];
        await updateCartById(cart.id, []);
        navigation.navigate("UITab", { screen: "OrderHistory" });
      }
    } catch (error) {
      console.error(error);
    }
  };
  const chuyenTrang = () => {
    navigation.navigate("UITab", { screen: "OrderHistory" });
  };

  return (
    <View style={styles.container}>
      <UIHeader iconLeft={image.back} />
      <View>
        <Text>Credit Card</Text>
        <LinearGradient
          colors={["#262B33", "#0C0F14"]}
          style={styles.linearGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.containerVisa}>
            <Image source={image.chip} />
            <Image source={image.visa} />
          </View>
          <View style={styles.CreditCardNumberContainer}>
            <Text style={styles.CreditCardNumber}>3879</Text>
            <Text style={styles.CreditCardNumber}>8923</Text>
            <Text style={styles.CreditCardNumber}>6745</Text>
            <Text style={styles.CreditCardNumber}>4638</Text>
          </View>

          <View style={styles.cardNameContainer}>
            <View>
              <Text style={styles.cardNameText}>Card Holder Name</Text>
              <Text style={styles.nameText}>Robert Evans</Text>
            </View>
            <View>
              <Text style={styles.cardNameText}>Expiry Date</Text>
              <Text style={styles.nameText}>02/30</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
      <LinearGradient
        colors={["#262B33", "#0C0F14"]}
        style={styles.containerRow}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Image source={require("../assets/images/wallet.png")} />
        <Text style={styles.textRow}>Wallet</Text>
        <Text style={{ color: "white", fontSize: 20 }}>$ 100.5</Text>
      </LinearGradient>
      <LinearGradient
        colors={["#262B33", "#0C0F14"]}
        style={styles.containerRow}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Image source={require("../assets/images/play.png")} />
        <Text style={styles.textRow}>Google Pay</Text>
      </LinearGradient>
      <LinearGradient
        colors={["#262B33", "#0C0F14"]}
        style={styles.containerRow}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Image source={require("../assets/images/tao.png")} />
        <Text style={styles.textRow}>Apple Pay</Text>
      </LinearGradient>
      <LinearGradient
        colors={["#262B33", "#0C0F14"]}
        style={styles.containerRow}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Image source={require("../assets/images/amazon.png")} />
        <Text style={styles.textRow}>Amazon Pay</Text>
      </LinearGradient>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "#AEAEAE", fontSize: 16 }}>Price</Text>
          <Text
            style={{
              color: Colors.orange,
              fontSize: 20,
              fontWeight: "700",
            }}
          >
            {" "}
            $
            <Text style={{ color: "white" }}>
              {Number(route.params?.amount).toFixed(2)}
            </Text>
          </Text>
        </View>
        <TouchableOpacity style={styles.buttonAdd} onPress={handlePayment}>
          <Text style={{ color: "#FFFFFF", fontWeight: "900" }}>
            Pay from Credit Card
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.brightRed,
    flex: 1,
  },
  cardContainer: {
    width: 300,
    height: 100,
  },
  linearGradient: {
    padding: 15,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Gill Sans",
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent",
  },
  containerVisa: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textVisa: {
    color: "white",
  },
  CreditCardNumberContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginTop: 20,
  },
  CreditCardNumber: {
    fontSize: 18,
    color: "white",
    flexDirection: "row",
    gap: 10,
  },
  cardNameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
  },
  cardNameText: {
    color: "white",
    opacity: 0.5,
  },
  nameText: {
    color: "white",
    fontWeight: "500",
    fontSize: 21,
  },
  containerRow: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    paddingHorizontal: 10,
    margin: 10,
    borderColor: "#262B33",
    borderWidth: 1,
    borderRadius: 20,
  },
  textRow: {
    color: "white",
    fontSize: 20,
    flex: 1,
    fontWeight: "600",
    marginStart: 20,
  },
  buttonAdd: {
    backgroundColor: Colors.orange,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    borderRadius: 20,
  },
});
