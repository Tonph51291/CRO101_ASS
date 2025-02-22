import { StatusBar, StyleSheet, Text, View } from "react-native";
import Colors from "@/constants/Colors";
import App from "@/navigation/App"; // App does not need to wrap NavigationContainer
import CartScreen from "@/screens/CartScreen";
import PaymentScreen from "@/screens/PeymentScreen";
import FavoriteScreen from "@/screens/FavoriteScreen";
import OrderHistoryScreen from "@/screens/OrderHistoryScreen";
import SettingScreen from "@/screens/SettingScreen";
import PersonalDetailsScreens from "@/screens/PersonalDetailsScreens";
import UITab from "@/navigation/UITab";

export default function Page() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={Colors.brightRed} barStyle="default" />
      <App />
    </View>
  );
}
