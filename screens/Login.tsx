import React, { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../constants/Colors";

import image from "@/constants/image";
import Icon from "@/constants/icon";
import Fonts from "@/constants/fonts";

import { Dimensions } from "react-native";
import icon from "@/constants/icon";
import { useNavigation } from "expo-router";

const screenWidth = Dimensions.get("window").width;

function Login() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={image.avatar} style={{ height: 150, width: 150 }} />
      <Text style={styles.textWelcome}>Welcome to Lungo !!</Text>
      <Text style={styles.textContinue}>Login to Continue</Text>

      <TextInput
        style={styles.textInput}
        placeholder="Email"
        placeholderTextColor={Colors.mediumGray}
      />
      <View style={{ width: "100%", flexDirection: "row", marginStart: -20 }}>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor={Colors.mediumGray}
        />
        <Image
          source={icon.eye}
          style={{
            height: 18,
            width: 18,
            position: "absolute",
            right: 15,
            top: 38,
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.styleButton}
        onPress={() => {
          navigation.navigate("UITab");
        }}
      >
        <Text style={styles.textButton}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.styleGG}>
        <Image
          source={icon.google}
          style={{
            height: 25,
            width: 25,
            marginStart: 10,
          }}
        />
        <Text style={styles.textGG}>Sign in with Google</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", marginTop: 50 }}>
        <Text style={{ color: Colors.white, fontSize: 18 }}>
          Don’t have account? Click
        </Text>
        <Text
          onPress={() => {
            navigation.navigate("Register");
          }}
          style={{ color: Colors.orange, fontWeight: "700", fontSize: 18 }}
        >
          Register
        </Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 50 }}>
        <Text style={{ color: Colors.white, fontSize: 18 }}>
          Don’t have an account? Click
        </Text>
        <Text
          onPress={() => {
            navigation.navigate("Register");
          }}
          style={{ color: Colors.orange, fontWeight: "700", fontSize: 18 }}
        >
          Register
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.brightRed,
    alignItems: "center",
  },
  textWelcome: {
    fontSize: 18,
    color: Colors.white,
    fontWeight: "700",
    fontFamily: "poppins",
  },
  textContinue: {
    fontSize: 12,
    color: "#828282",
    fontWeight: "700",
    fontFamily: "poppins",
  },
  textInput: {
    width: "95%",
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.mediumGray,
    margin: 20,
    paddingStart: 10,
    color: "white",
    fontSize: 20,
  },

  styleButton: {
    width: "90%",
    height: 50,
    borderRadius: 20,
    backgroundColor: Colors.orange,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  styleGG: {
    flexDirection: "row",
    width: "90%",
    height: 50,
    borderRadius: 20,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "poppins",
    color: Colors.white,
  },
  textGG: {
    flex: 1,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "poppins",
    color: "black",
    textAlign: "center",
  },
});

export default Login;
