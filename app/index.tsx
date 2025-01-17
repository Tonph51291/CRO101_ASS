import { StatusBar, StyleSheet, Text, View } from "react-native";

import Login from "../screens/Login";
import Register from "../screens/Register";
import Welcome from "../screens/Welcome";
import Home from "../screens/Home";

import Colors from "@/constants/Colors";
import ProductDetails from "@/screens/ProductDetails";
import UITab from "@/navigation/UITab";
export default function Page() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={Colors.brightRed} barStyle="default" />
      <UITab />
    </View>
  );
}
