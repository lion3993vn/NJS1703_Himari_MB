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
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <FlatList
          data={products}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductItem {...item} />}
          nestedScrollEnabled={true}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 8,
    paddingTop: 10,
  },
  productList: {
    paddingBottom: 20,
  },
});

export default ProductList;
