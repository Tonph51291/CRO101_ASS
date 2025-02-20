import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Colors from "@/constants/Colors";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";
import image from "@/constants/image";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { UIHeader } from "@/components";

export default function PersonalDetailsScreens() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  return (
    <View style={styles.container}>
      <UIHeader iconLeft={image.back} title="Setting" />
      <Image
        source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
        style={styles.avatar}
      />

      {/* Ô nhập liệu */}
      <TextInput
        style={styles.input}
        placeholder="Nguyen Van A"
        placeholderTextColor="#A0A0A0"
      />
      <TextInput
        style={styles.input}
        placeholder="vana@gmail.com"
        placeholderTextColor="#A0A0A0"
        keyboardType="email-address"
      />

      {/* Password Input */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          placeholderTextColor="#A0A0A0"
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={20}
            color="#A0A0A0"
          />
        </TouchableOpacity>
      </View>

      {/* Re-type Password */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Re-type password"
          placeholderTextColor="#A0A0A0"
          secureTextEntry={!showRePassword}
        />
        <TouchableOpacity onPress={() => setShowRePassword(!showRePassword)}>
          <Ionicons
            name={showRePassword ? "eye-off" : "eye"}
            size={20}
            color="#A0A0A0"
          />
        </TouchableOpacity>
      </View>

      {/* Nút Save */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.brightRed,
    alignItems: "center",
    padding: 10,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 20,
    marginTop: 30,
    marginBottom: 30,
  },
  input: {
    width: "100%",
    borderColor: Colors.darkGray,
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
    color: "white",
  },
  passwordContainer: {
    width: "100%",
    height: 50,
    borderColor: Colors.darkGray,
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginTop: 15,
    color: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
    color: "white",
  },
  saveButton: {
    width: "100%",
    backgroundColor: "#D47F4E",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  saveText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
