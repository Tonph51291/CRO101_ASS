import React, { useState } from "react";
import {
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
import fonts from "@/constants/fonts";
import { Dimensions } from "react-native";
import icon from "@/constants/icon";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";
import { register } from "@/repositories/apiUsers";

function Register(props: any) {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [password, setPassword] = useState("");
  const [configPassword, setConfigPassword] = useState("");

  const login = async () => {
    // Kiểm tra dữ liệu nhập vào
    if (!name.trim()) {
      alert("Vui lòng nhập tên!");
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      alert("Email không hợp lệ!");
      return;
    }
    if (password.length < 6) {
      alert("Mật khẩu phải có ít nhất 6 ký tự!");
      return;
    }
    if (password !== configPassword) {
      alert("Mật khẩu xác nhận không khớp!");
      return;
    }

    // Gọi API đăng ký
    try {
      await register({ name, email, password });
      alert("Đăng ký thành công!");
      navigation.navigate("Login"); // Chuyển đến màn hình đăng nhập
    } catch (error) {
      console.log("Lỗi", error);
      alert("Đăng ký thất bại. Vui lòng thử lại!");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={image.avatar} style={{ height: 150, width: 150 }} />
      <Text style={styles.textWelcome}>Welcome to Lungo !!</Text>
      <Text style={styles.textContinue}>Login to Continue</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Name"
        placeholderTextColor={Colors.mediumGray}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        placeholderTextColor={Colors.mediumGray}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <View style={{ width: "100%", flexDirection: "row", marginStart: 20 }}>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor={Colors.mediumGray}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Image
          source={icon.eye}
          style={{
            height: 18,
            width: 18,
            position: "absolute",
            right: 35,
            top: 15,
          }}
        />
      </View>
      <View style={{ width: "100%", flexDirection: "row", marginStart: 20 }}>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor={Colors.mediumGray}
          value={configPassword}
          onChangeText={(text) => setConfigPassword(text)}
        />
        <Image
          source={icon.eye}
          style={{
            height: 18,
            width: 18,
            position: "absolute",
            right: 35,
            top: 15,
          }}
        />
      </View>

      <TouchableOpacity style={styles.styleButton} onPress={login}>
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

      <View style={{ flexDirection: "row", margin: 20 }}>
        <Text style={{ color: Colors.white, fontSize: 18 }}>
          You have an account? Click
        </Text>
        <Text
          onPress={() => {
            navigation.navigate("Login");
          }}
          style={{ color: Colors.orange, fontWeight: "700", fontSize: 18 }}
        >
          Sign in
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
    marginBottom: 20,
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

export default Register;
