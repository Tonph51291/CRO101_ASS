import React from "react";
import Login from "@/screens/Login";

import Welcome from "@/screens/Welcome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UITab from "./UITab";
import { NavigationContainer } from "@react-navigation/native";
import ProductDetails from "@/screens/ProductDetails";
import Register from "@/screens/Register";
import PaymentScreen from "@/screens/PeymentScreen";
import SettingScreen from "@/screens/SettingScreen";
import PersonalDetailsScreens from "@/screens/PersonalDetailsScreens";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="UITab" component={UITab} />
      <Stack.Screen name="Details" component={ProductDetails} />
      <Stack.Screen name="Settings" component={SettingScreen} />
      <Stack.Screen
        name="PersonalDetailsScreens"
        component={PersonalDetailsScreens}
      />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
