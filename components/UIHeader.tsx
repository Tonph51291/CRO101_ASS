import React from "react";
import icon from "../constants/icon";
import image from "../constants/image";
import Colors from "@/constants/Colors";

import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";

function UIHeader(props: any) {
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
      >
        <Image source={icon.menu} style={{ width: 20, height: 20 }} />
      </TouchableOpacity>
      <View style={{ flex: 1 }}></View>
      <View style={{ width: 30, height: 30, marginEnd: 10 }}>
        <Image
          source={image.ton}
          style={{ width: 30, height: 50 }}
          borderRadius={10}
        />
      </View>
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
});
export default UIHeader;
