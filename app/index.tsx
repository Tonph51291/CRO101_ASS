import { StatusBar, StyleSheet, Text, View } from "react-native";
import Colors from "@/constants/Colors";
import App from "@/navigation/App"; // App does not need to wrap NavigationContainer

export default function Page() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={Colors.brightRed} barStyle="default" />
      <App /> {/* This is where your navigation logic is */}
    </View>
  );
}
