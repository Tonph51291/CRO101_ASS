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
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="home"
              size={25}
              color={focused ? Colors.orange : Colors.brightRed}
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
              name="shopping-cart"
              size={25}
              color={focused ? Colors.orange : Colors.brightRed}
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
              size={25}
              color={focused ? Colors.orange : Colors.brightRed}
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
              name="history"
              size={25}
              color={focused ? Colors.orange : Colors.brightRed}
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
