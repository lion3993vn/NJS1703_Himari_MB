import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import ProductItem from "../product/ProductItem";
import { products } from "./product";

const ProductList = () => {
  return (
    <View className="flex-1 bg-gray-100 px-2 pt-2">
      <ScrollView className="flex-1">
        <FlatList
          data={products}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductItem {...item} />}
          nestedScrollEnabled
        />
      </ScrollView>
    </View>
  );
};

export default ProductList;
