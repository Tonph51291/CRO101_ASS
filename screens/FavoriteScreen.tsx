import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import icon from "@/constants/icon";
import image from "@/constants/image";
import { UIHeader } from "@/components";
import Colors from "@/constants/Colors";
import { ImageBackground } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function FavoriteScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <UIHeader iconLeft={icon.menu} iconRight={image.ton} title="Favorites" />

      <View style={styles.containerFavorite}>
        <View style={{ borderRadius: 20 }}>
          <ImageBackground
            source={{
              uri: "https://img.freepik.com/free-photo/delicious-coffee-beans-cup_23-2150691429.jpg",
            }}
            style={styles.imgStyle}
            imageStyle={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
          />

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

          <TouchableOpacity style={styles.containerHeart}>
            <Image source={require("@/assets/images/heart.png")} />
          </TouchableOpacity>
        </View>
        <LinearGradient
          colors={["#262B33", "#0C0F14"]}
          style={styles.containerText}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Text style={{ color: "#AEAEAE", fontWeight: "bold", fontSize: 18 }}>
            Description
          </Text>
          <Text
            style={{
              color: "#FFFFFF",
              marginVertical: 5,
              fontSize: 14,
              fontWeight: 400,
            }}
          >
            Arabica beans are by far the most popular type of coffee beans,
            making up about 60% of the world’s coffee. These tasty beans
            originated many centuries ago in the highlands of Ethiopia, and may
            even be the first coffee beans ever consumed!{" "}
          </Text>
        </LinearGradient>
        <View></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.brightRed,
    flex: 1,
    alignItems: "center",
  },
  containerFavorite: {
    justifyContent: "center",
    marginHorizontal: 10,
    marginTop: 20,
  },
  imgStyle: {
    width: "100%",
    position: "relative",
    aspectRatio: 20 / 24,
  },
  viewTitle: {},

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
  containerText: {
    paddingStart: 10,
    paddingVertical: 10,
    borderBottomLeftRadius: 20,
    borderBottomStartRadius: 20,
  },
  containerHeart: {
    width: 40,
    height: 40,

    backgroundColor: "#21262E",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    position: "absolute",
    top: 10,
    right: 20,
  },
});
