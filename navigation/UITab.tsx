import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import Home from "@/screens/Home";
import Icon from "react-native-vector-icons/MaterialIcons";
import CartScreen from "@/screens/CartScreen";
import FavoriteScreen from "@/screens/FavoriteScreen";
import OrderHistoryScreen from "@/screens/OrderHistoryScreen";
import Colors from "@/constants/Colors";

const Tab = createBottomTabNavigator();

export default function UITab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Colors.brightRed,
          borderTopWidth: 0, // Loại bỏ viền nếu có
          elevation: 0, // Xóa hiệu ứng nổi (Android)
          opacity: 0.9,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="home"
              size={30}
              color={focused ? Colors.orange : "#4E5053"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="shopping-bag"
              size={30}
              color={focused ? Colors.orange : "#4E5053"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="favorite"
              size={30}
              color={focused ? Colors.orange : "#4E5053"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="OrderHistory"
        component={OrderHistoryScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="notifications"
              size={30}
              color={focused ? Colors.orange : "#4E5053"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: "absolute",
    backgroundColor: Colors.orange,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: "transparent",
  },
  BlurViewStyles: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
