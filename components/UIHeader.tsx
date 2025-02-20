import React from "react";
import icon from "../constants/icon";
import image from "../constants/image";
import Colors from "@/constants/Colors";

import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";

function UIHeader(props: any) {
  const { iconRight, iconLeft, title } = props;

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={{
          height: 30,
          width: 30,
          backgroundColor: "#21262E",
          justifyContent: "center",
          alignItems: "center",
          borderColor: Colors.mediumGray,
          borderRadius: 20,
          borderWidth: 1,
          marginStart: 10,
        }}
        onPress={props.onPress}
      >
        <Image source={iconLeft} style={{ width: 20, height: 20 }} />
      </TouchableOpacity>
      <Text style={styles.styleTextTitle}>{title}</Text>
      {iconRight == undefined ? (
        <View style={{ width: 40 }} />
      ) : (
        <View
          style={{
            height: 40,
            width: 40,
            backgroundColor: "#21262E",
            justifyContent: "center",
            alignItems: "center",
            borderColor: Colors.mediumGray,
            borderRadius: 5,
            borderWidth: 1,
            marginStart: 10,
          }}
        >
          <Image
            source={iconRight}
            style={{ width: 30, height: 30 }}
            resizeMode="cover"
          />
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 30,
    flexDirection: "row",
    justifyContent: "center",
  },
  styleTextTitle: {
    flex: 1,
    textAlign: "center",
    color: "white",
    fontWeight: "700",
    fontSize: 20,
    fontFamily: "poppins",
  },
});
export default UIHeader;
