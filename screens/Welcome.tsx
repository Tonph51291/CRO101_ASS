import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import image from "../constants/image";
import Colors from "@/constants/Colors";

function Welcome(props: any) {
  return (
    <View
      style={{
        backgroundColor: Colors.brightRed,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={image.avatar} style={{ height: 200, width: 200 }} />
    </View>
  );
}

export default Welcome;
