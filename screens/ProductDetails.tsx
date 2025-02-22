import { UIHeader } from "@/components";
import Colors from "@/constants/Colors";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import image from "../constants/image";
import { ImageBackground } from "react-native";
import { Image, StyleSheet, View } from "react-native";
import { useNavigation } from "expo-router";
import { NavigationProp, useRoute } from "@react-navigation/native";
import { BASE_URL } from "@/repositories/baseURL";
import { useState } from "react";

export default function ProductDetails() {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const router = useRoute();
  const { products } = router.params as { products: any };
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const handleSizeSelection = (size: string, price: number) => {
    setSelectedSizes((prev) => {
      let updatedSizes;

      if (prev.includes(size)) {
        updatedSizes = prev.filter((s) => s !== size);
      } else {
        updatedSizes = [...prev, size];
      }

      // Tính tổng giá dựa trên các size đã chọn
      const newTotal = products.prices
        .filter((item: { size: string; price: number }) =>
          updatedSizes.includes(item.size)
        )
        .reduce((sum: number, item: any) => sum + Number(item.price), 0); // Đảm bảo
      setTotalPrice(parseFloat(newTotal.toFixed(2)));

      return updatedSizes;
    });
  };

  console.log(products.prices);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewImg}>
        <ImageBackground
          source={{
            uri: `${BASE_URL}/${products.imagelink_portrait}`,
          }}
          style={styles.imgStyle}
        />
        <View style={{ position: "absolute", top: 10, width: "100%" }}>
          <UIHeader
            iconLeft={image.back}
            iconRight={image.heart}
            onPress={() => {
              navigation.navigate("UITab");
            }}
          />
        </View>
        <View style={styles.imgText}>
          <View
            style={{
              marginHorizontal: 10,
            }}
          >
            <View>
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: "700",
                  fontFamily: "poppins",
                }}
              >
                {products.name}
              </Text>
              <Text
                style={{
                  color: "#AEAEAE",
                  fontSize: 16,
                  fontWeight: "400",
                  fontFamily: "poppins",
                }}
              >
                From Africa
              </Text>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    marginTop: 10,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../assets/images/star.png")}
                    style={{ width: 30, height: 30 }}
                  />
                  <Text
                    style={{
                      marginStart: 5,
                      fontSize: 30,
                      fontWeight: "bold",
                      color: "white",
                      fontFamily: "poppins",
                    }}
                  >
                    4.5
                  </Text>
                  <Text
                    style={{
                      marginStart: 15,
                      fontSize: 15,

                      color: "#AEAEAE",
                      fontFamily: "poppins",
                    }}
                  >
                    (6,879)
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: "#141921",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 5,
                  marginRight: 30,
                }}
              >
                <Image
                  source={require("../assets/images/coffee.png")}
                  style={{ width: 35, height: 35 }}
                />
                <Text style={{ color: "#AEAEAE" }}>Bean</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: "#141921",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 5,
                  padding: 5,
                }}
              >
                <Image
                  source={require("../assets/images/coffee.png")}
                  style={{ width: 35, height: 35 }}
                />
                <Text style={{ color: "#AEAEAE" }}>Africa</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#141921",
                marginTop: 10,
                justifyContent: "center",
                alignItems: "center",
                height: 44,
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  color: "#AEAEAE",
                  fontSize: 15,
                  fontWeight: "500",
                  fontFamily: "poppins",
                }}
              >
                {products.roasted}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <Text style={{ color: "#AEAEAE", fontSize: 19, marginTop: 5 }}>
          Description
        </Text>
        <Text
          style={{
            color: "#FFFFFF",
            marginVertical: 5,
            fontSize: 14,
          }}
          numberOfLines={5} // Giới hạn tối đa 6 dòng
          ellipsizeMode="tail" // Thêm "..." nếu nội dung quá dài
        >
          {products.description}
        </Text>

        <Text style={{ color: "#FFFFFF", marginBottom: 5, fontSize: 16 }}>
          Size
        </Text>
        <View style={styles.sizeStyle}>
          {products.prices.map((data: any) => {
            const isSelected = selectedSizes.includes(data.size);

            console.log("Checking size:", data.price, "=>", isSelected);
            return (
              <TouchableOpacity
                key={data.size}
                style={[
                  styles.buttonSize,
                  isSelected && { backgroundColor: Colors.orange }, // Nếu được chọn thì đổi màu
                ]}
                onPress={() => handleSizeSelection(data.size, data.price)}
              >
                <Text style={{ color: isSelected ? "white" : "#AEAEAE" }}>
                  {data.size}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
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
              $ <Text style={{ color: "white" }}> {totalPrice}</Text>
            </Text>
          </View>
          <TouchableOpacity style={styles.buttonAdd}>
            <Text style={{ color: "#FFFFFF", fontWeight: "900" }}>300ml</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.brightRed,
  },
  viewImg: {},

  viewTitle: {},
  imgStyle: {
    width: "100%",
    position: "relative",
    aspectRatio: 20 / 24,
  },
  imgText: {
    width: "100%",
    height: "28%",

    backgroundColor: "rgba(20, 25, 33, 0.5)",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    flexDirection: "row",
    bottom: 0,
    paddingHorizontal: 15,
  },
  sizeStyle: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  buttonSize: {
    width: "30%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#141921",
  },
  buttonAdd: {
    backgroundColor: Colors.orange,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    borderRadius: 10,
  },
});
