import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "@/constants/Colors";
import image from "@/constants/image";
import { Ionicons } from "@expo/vector-icons";
import { UIHeader } from "@/components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUserById, updateUserById } from "@/repositories/apiUsers"; // Import API

export default function PersonalDetailsScreens({ navigation }: any) {
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  // Lấy thông tin user từ AsyncStorage và API
  const getUser = async () => {
    try {
      const storedUserId = await AsyncStorage.getItem("userId");
      if (!storedUserId) {
        Alert.alert("Thông báo", "Vui lòng đăng nhập trước!");
        return;
      }
      setUserId(storedUserId); // Lưu userId để cập nhật sau

      const responseData = await getUserById(storedUserId);
      if (responseData) {
        setName(responseData.name);
        setEmail(responseData.email);
      }
    } catch (error) {
      console.error("Lỗi khi lấy thông tin user:", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  // Hàm cập nhật thông tin tài khoản
  const updateUser = async () => {
    if (!userId) {
      console.log("Loi");
      return;
    }

    if (password && password !== rePassword) {
      Alert.alert("Lỗi", "Mật khẩu không khớp. Vui lòng nhập lại!");
      return;
    }

    try {
      const updatedData: any = { name, email };
      if (password) {
        updatedData.password = password; // Chỉ thêm password nếu người dùng nhập
      }

      const response = await updateUserById(userId, updatedData);

      if (response.success) {
        Alert.alert("Thành công", "Cập nhật thông tin thành công!");
        navigation.goBack();
      } else {
        Alert.alert("Lỗi", "Có lỗi xảy ra, vui lòng thử lại!");
      }
    } catch (error) {
      console.error("Lỗi khi cập nhật user:", error);
      Alert.alert("Lỗi", "Không thể cập nhật thông tin.");
    }
  };

  return (
    <View style={styles.container}>
      <UIHeader
        iconLeft={image.back}
        title="Cài đặt"
        onPress={() => navigation.goBack()}
      />
      <Image
        source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
        style={styles.avatar}
      />

      {/* Ô nhập tên */}
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Nguyễn Văn A"
        placeholderTextColor="#A0A0A0"
      />

      {/* Ô nhập email */}
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="vana@gmail.com"
        placeholderTextColor="#A0A0A0"
        keyboardType="email-address"
      />

      {/* Ô nhập mật khẩu */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Mật khẩu mới (nếu thay đổi)"
          placeholderTextColor="#A0A0A0"
          secureTextEntry={!showPassword}
          onChangeText={setPassword}
          value={password}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={20}
            color="#A0A0A0"
          />
        </TouchableOpacity>
      </View>

      {/* Ô nhập lại mật khẩu */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Nhập lại mật khẩu"
          placeholderTextColor="#A0A0A0"
          secureTextEntry={!showRePassword}
          onChangeText={setRePassword}
          value={rePassword}
        />
        <TouchableOpacity onPress={() => setShowRePassword(!showRePassword)}>
          <Ionicons
            name={showRePassword ? "eye-off" : "eye"}
            size={20}
            color="#A0A0A0"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={updateUser}>
        <Text style={styles.saveText}>Lưu</Text>
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
