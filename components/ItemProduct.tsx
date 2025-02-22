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

import { UIHeader } from "../components";
import { BASE_URL } from "@/repositories/baseURL";
import { NavigationProp } from "@react-navigation/native";
import { useNavigation } from "expo-router";
const CARD_WIDTH = Dimensions.get("window").width * 0.33;
const CARD_HEIGHT = CARD_WIDTH * 1.9;
export default function ItemProduct({ item, onPress }: any) {
  return (
    <TouchableOpacity
      style={{
        height: CARD_HEIGHT,
        backgroundColor: "#252A32",
        marginHorizontal: 10,
        borderRadius: 23,
        padding: 15,
      }}
      onPress={onPress}
    >
      <View
        style={{
          backgroundColor: "red",
          width: CARD_WIDTH,
          borderRadius: 10,
        }}
      >
        <Image
          source={{
            uri: `${BASE_URL}/${item.imagelink_square}`,
          }}
          style={{
            width: CARD_WIDTH,
            height: CARD_WIDTH,
            borderRadius: 10,
            position: "relative",
            resizeMode: "cover",
          }}
        />
        <View
          style={{
            height: "23%",
            width: "50%",
            position: "absolute",
            backgroundColor: "#00000099",
            right: 0,
            alignItems: "center",
            borderBottomLeftRadius: 26,
            borderTopRightRadius: 10,
            opacity: 0.9,
            flexDirection: "row",
            paddingStart: 10,
          }}
        >
          <Image source={require("../assets/images/star.png")} />
          <Text
            style={{
              marginStart: 5,
              fontSize: 18,
              fontWeight: "bold",
              color: "white",
              fontFamily: "poppins",
            }}
          >
            4.5
          </Text>
        </View>
      </View>
      <View>
        <Text style={styles.textNameProduct}>{item.name}</Text>
        <Text
          style={{
            color: "white",
            fontFamily: "poppins",
            lineHeight: 20,
            marginTop: 5,
          }}
        >
          {item.special_ingredient}
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: "poppins",
              fontWeight: "600",
              color: Colors.orange,
            }}
          >
            {" "}
            $ <Text style={{ color: "white" }}>{item.prices[0].price}</Text>
          </Text>
          <TouchableOpacity
            style={{
              height: CARD_WIDTH * 0.25,
              width: CARD_WIDTH * 0.25,
              backgroundColor: Colors.orange,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <Icon name="plus" size={18} color={"white"} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.brightRed,
  },
  textStyle: {
    fontSize: 30,
    color: "white",
    lineHeight: 36,
    width: 200,
    fontFamily: "poppins",
    fontWeight: "700",
    margin: 30,
  },
  textInputStyle: {
    width: "90%",
    height: 40,
    backgroundColor: "#141921",
    borderRadius: 20,
    color: "#52555A",
    paddingStart: 40,

    fontSize: 18,
  },
  textCategory: {
    color: Colors.orange,
    fontSize: 16,
    fontWeight: "700",
  },
  textCategory2: {
    color: Colors.mediumGray,
    fontSize: 16,
    fontWeight: "700",
  },
  itemProduct: {
    flex: 1,
    backgroundColor: "red ",
  },
  textNameProduct: {
    color: "#FFFFFF",
    fontWeight: "400",
    fontSize: 18,
    marginTop: 10,
    fontFamily: "poppins",
    width: CARD_WIDTH,
    lineHeight: 20,
  },
});
