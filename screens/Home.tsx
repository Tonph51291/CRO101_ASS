import Colors from "@/constants/Colors";
import icon from "@/constants/icon";
import image from "@/constants/image";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { UIHeader } from "../components";
import ItemProduct from "@/components/ItemProduct";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";
import { getListProduct } from "@/repositories/apiProduct";

const CARD_WIDTH = Dimensions.get("window").width * 0.35;
const CARD_HEIGHT = CARD_WIDTH * 1;
export interface Product {
  id: string;
  name: string;
  description: string;
  roasted: string;
  imagelink_square: string;
  imagelink_portrait: string;
  ingredients: string;
  special_ingredient: string;
  prices: {
    size: string;
    price: string;
    currency: string;
  }[];
  average_rating: number;
  ratings_count: string;
  favourite: boolean;
  type: string;
  index: number;
}

function Home({ navigation }: any) {
  const category = [
    { id: "1", name: "All" },
    { id: "2", name: "Cappuccino" },
    { id: "3", name: "Espresso" },
    { id: "4", name: "Americano" },
    { id: "5", name: "Macchiato" },
  ];
  const [selector, setSelector] = useState("All");

  const [products, setListProducts] = useState<Product[]>([]);
  const [type, setType] = useState<any[]>([]);
  const fetchProduct = async () => {
    try {
      const responseData = await getListProduct();

      setListProducts(responseData);
    } catch (error) {}
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  useEffect(() => {
    const allTypes = products.map((item) => item.type);
    const uniqueTypes = [...new Set(allTypes)];
    const typesWithId = [
      { id: "0", typeName: "All" },
      ...uniqueTypes.map((type, index) => ({
        id: (index + 1).toString(),
        typeName: type,
      })),
    ];

    setType(typesWithId); // ✅ Chỉ cập nhật state khi `products` thay đổi
  }, [products]); // Chạy lại khi `products` thay đổi
  const [selectedType, setSelectedType] = useState("All");

  return (
    <View style={styles.container}>
      <UIHeader iconLeft={icon.menu} iconRight={image.ton} />
      <Text style={styles.textStyle}>Find the best coffee for you</Text>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Find Your Coffee..."
          placeholderTextColor={Colors.darkGray}
        />
        <Image
          source={icon.search}
          style={{
            position: "absolute",
            top: 10,
            start: 30,
          }}
        />
      </View>
      <View>
        <FlatList
          style={{ marginTop: 20, marginStart: 10 }}
          horizontal={true}
          keyExtractor={(item) => item.id}
          data={type}
          renderItem={({ item }) => {
            return (
              <View style={{ alignItems: "center", marginHorizontal: 10 }}>
                <Text
                  style={
                    item.typeName == selector
                      ? styles.textCategory
                      : styles.textCategory2
                  }
                  onPress={() => {
                    setSelector(item.typeName);
                  }}
                >
                  {item.typeName}
                </Text>
                {item.typeName == selector ? (
                  <View
                    style={{
                      width: 10,
                      height: 10,
                      backgroundColor: Colors.orange, // Màu chấm
                      borderRadius: 5,
                      marginTop: 4,
                    }}
                  />
                ) : (
                  <View />
                )}
              </View>
            );
          }}
        />
      </View>

      <FlatList
        data={type}
        keyExtractor={(item) => item.id + ""}
        renderItem={({ item }) => {
          const filteredProducts = products.filter(
            (product) => product.type === item.typeName
          );

          return (
            <View>
              {item.typeName == "All" ? (
                <Text></Text>
              ) : (
                <Text
                  style={{
                    color: "white",
                    fontSize: 19,
                    fontWeight: "500",
                    fontFamily: "poppins",
                    paddingVertical: 10,
                    paddingStart: 10,
                  }}
                >
                  {item.typeName}
                </Text>
              )}
              <FlatList
                horizontal={true}
                data={filteredProducts} // Replace with your actual data
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <ItemProduct
                    item={item}
                    onPress={() =>
                      navigation.navigate("Details", { products: item })
                    }
                  />
                )}
              />
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.brightRed,
  },
  textStyle: {
    fontSize: 30,
    color: "white",
    lineHeight: 36,
    width: 200,
    fontFamily: "poppins",
    fontWeight: "700",
    margin: 30,
  },
  textInputStyle: {
    width: "90%",
    height: 40,
    backgroundColor: "#141921",
    borderRadius: 20,
    color: "#52555A",
    paddingStart: 40,

    fontSize: 18,
  },
  textCategory: {
    color: Colors.orange,
    fontSize: 16,
    fontWeight: "700",
  },
  textCategory2: {
    color: Colors.mediumGray,
    fontSize: 16,
    fontWeight: "700",
  },
  itemProduct: {
    flex: 1,
    backgroundColor: "red ",
  },
  textNameProduct: {
    color: "#FFFFFF",
    fontWeight: "400",
    fontSize: 20,
    marginTop: 10,
    fontFamily: "poppins",
    width: CARD_WIDTH,
    lineHeight: 20,
  },
});
export default Home;
