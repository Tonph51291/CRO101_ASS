import { UIHeader } from "@/components";
import Colors from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";
import icon from "@/constants/icon";
import image from "@/constants/image";
import CartItem from "@/components/CartItem";

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <UIHeader iconLeft={icon.menu} iconRight={image.ton} title="Cart" />
      <CartItem />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.brightRed,
    flex: 1,
  },
});
