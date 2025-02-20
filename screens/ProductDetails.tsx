import { UIHeader } from "@/components";
import Colors from "@/constants/Colors";
import { Text, TouchableOpacity } from "react-native";
import image from "../constants/image";
import { ImageBackground } from "react-native";
import { Image, StyleSheet, View } from "react-native";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";

export default function ProductDetails(props: any) {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.viewImg}>
        <ImageBackground
          source={{
            uri: "https://img.freepik.com/free-photo/delicious-coffee-beans-cup_23-2150691429.jpg",
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
                Coffee
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
                Medium Roasted
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <Text style={{ color: "#AEAEAE", fontSize: 19, marginTop: 5 }}>
          Description
        </Text>
        <Text style={{ color: "#FFFFFF", marginVertical: 5, fontSize: 14 }}>
          Arabica beans are by far the most popular type of coffee beans, making
          up about 60% of the world’s coffee. These tasty beans originated many
          centuries ago in the highlands of Ethiopia, and may even be the first
          coffee beans ever consumed!{" "}
        </Text>
        <Text style={{ color: "#FFFFFF", marginBottom: 5, fontSize: 16 }}>
          Size
        </Text>
        <View style={styles.sizeStyle}>
          <TouchableOpacity style={styles.buttonSize}>
            <Text style={{ color: "#AEAEAE" }}>300ml</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSize}>
            <Text style={{ color: "#AEAEAE" }}>300ml</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSize}>
            <Text style={{ color: "#AEAEAE" }}>300ml</Text>
          </TouchableOpacity>
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
              $ <Text style={{ color: "white" }}> 10.0</Text>
            </Text>
          </View>
          <TouchableOpacity style={styles.buttonAdd}>
            <Text style={{ color: "#FFFFFF", fontWeight: "900" }}>300ml</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
