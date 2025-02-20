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
import { isValidateEmail, isValidatePassword } from "../utilies/validate";
import { NavigationProp } from "@react-navigation/native";

const screenWidth = Dimensions.get("window").width;

function Login() {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const handleSignIn = (email: String, password: String) => {
    if (email === "ton@gmail.com" || password === "123456") {
      navigation.navigate("UITab");
    } else {
      alert("Sai tai khoan hoac mat khau");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={image.avatar} style={{ height: 150, width: 150 }} />
      <Text style={styles.textWelcome}>Welcome to Lungo !!</Text>
      <Text style={styles.textContinue}>Login to Continue</Text>

      <TextInput
        style={styles.textInput}
        placeholder="Email"
        placeholderTextColor={Colors.mediumGray}
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => {
          if (isValidateEmail(text) == false) {
            setErrorEmail("Email không đúng định dạng");
          } else {
            setErrorEmail("");
          }
          setEmail(text);
        }}
      />
      <Text style={styles.errorText}>{errorEmail}</Text>
      <View style={{ width: "100%", flexDirection: "row", marginStart: -20 }}>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor={Colors.mediumGray}
          secureTextEntry
          value={password}
          onChangeText={(text) => {
            if (isValidatePassword(text) == false) {
              setErrorPassword("Password không đúng định dạng");
            } else {
              setErrorPassword("");
            }
            setPassword(text);
          }}
        />
        <Image
          source={icon.eye}
          style={{
            height: 18,
            width: 18,
            position: "absolute",
            right: 15,
            top: 20,
          }}
        />
      </View>

      <Text style={styles.errorText}>{errorPassword}</Text>

      <TouchableOpacity
        style={styles.styleButton}
        onPress={() => {
          handleSignIn(email, password);
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
          Don't have account? Click
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
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
      >
        <Text style={{ color: "#fff" }}>Forgot Password? </Text>
        <TouchableOpacity>
          <Text style={{ color: "#D17842", fontWeight: "bold" }}>Reset</Text>
        </TouchableOpacity>
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
    marginHorizontal: 20,
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
  errorText: {
    color: "#FF5A5F",

    marginBottom: 10,

    width: "90%",
    marginTop: 10,
    fontSize: 18,
  },
});

export default Login;
