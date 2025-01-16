import Colors from "@/constants/Colors";
import icon from "@/constants/icon";
import image from "@/constants/image";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { UIHeader } from "../components";
function Home(props) {
  return (
    <View style={styles.container}>
      <UIHeader />
      <Text style={styles.textStyle}>Find the best coffee for you</Text>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Find Your Coffee..."
          placeholderTextColor={Colors.darkGray}
        />
        <Image
          source={icon.search}
          style={{
            position: "absolute",
            top: 10,
            start: 30,
          }}
        />
      </View>
    </View>
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
});
export default Home;
