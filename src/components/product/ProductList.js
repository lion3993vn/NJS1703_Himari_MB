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

const products = [
  {
    id: "1",
    brandName: "Caryophy",
    name: "Gel Tẩy Tế Bào Chết Caryophy",
    image: require("../../../assets/img/sample.png"),
    price: 450000, // Giá gốc
    discountPrice: 278000, // Giá giảm
    discount: 38, // % giảm giá
    rating: 5.0, // Đánh giá sao
    sold: 320, // Lượt mua/tháng
  },
  {
    id: "2",
    brandName: "Olay",
    name: "Kem Dưỡng Olay Luminous",
    image: require("../../../assets/img/sample.png"),
    price: 270000,
    discountPrice: 188000,
    discount: 30,
    rating: 4.9,
    sold: 1200,
  },
  {
    id: "3",
    brandName: "Caryophy",
    name: "Gel Tẩy Tế Bào Chết Caryophy",
    image: require("../../../assets/img/sample.png"),
    price: 450000, // Giá gốc
    discountPrice: 278000, // Giá giảm
    discount: 38, // % giảm giá
    rating: 5.0, // Đánh giá sao
    sold: 320, // Lượt mua/tháng
  },
  {
    id: "4",
    brandName: "Caryophy",
    name: "Gel Tẩy Tế Bào Chết Caryophy",
    image: require("../../../assets/img/sample.png"),
    price: 450000, // Giá gốc
    discountPrice: 278000, // Giá giảm
    discount: 38, // % giảm giá
    rating: 5.0, // Đánh giá sao
    sold: 320, // Lượt mua/tháng
  },
];
const ProductList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductItem {...item} />}
        contentContainerStyle={styles.productList}
        showsVerticalScrollIndicator={false}
      />
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
