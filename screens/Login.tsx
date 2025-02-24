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
import { login } from "@/repositories/apiUsers";
import AsyncStorage from "@react-native-async-storage/async-storage";

const screenWidth = Dimensions.get("window").width;

function Login(props: any) {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const [email, setEmail] = useState("ton@gmail.com");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const handleLogin = async () => {
    setErrorEmail("");
    setErrorPassword("");

    if (!email.trim()) {
      setErrorEmail("Không được bỏ trống email");
      return;
    }
    if (!isValidateEmail(email)) {
      setErrorEmail("Email không đúng định dạng");
      return;
    }

    if (!password.trim()) {
      setErrorPassword("Không được bỏ trống password");
      return;
    }
    if (!isValidatePassword(password)) {
      setErrorPassword("Password không đúng định dạng");
      return;
    }

    try {
      const user = await login({ email, password });

      if (user.password !== password) {
        Alert.alert("Lỗi", "Sai mật khẩu");
        return;
      }
      await AsyncStorage.setItem("userId", user.id);
      navigation.navigate("UITab");
    } catch (error) {
      Alert.alert("Lỗi", "Tài khoản hoặc mật khẩu không chính xác");
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

      <TouchableOpacity style={styles.styleButton} onPress={handleLogin}>
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
