import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";

const products = [
  {
    id: "1",
    name: "Gel Tẩy Tế Bào Chết Caryophy",
    image: require("../../assets/img/sample.png"),
    price: 450000, // Giá gốc
    discountPrice: 278000, // Giá giảm
    discount: 38, // % giảm giá
    rating: 5.0, // Đánh giá sao
    sold: 320, // Lượt mua/tháng
  },
  {
    id: "2",
    name: "Kem Dưỡng Olay Luminous",
    image: require("../../assets/img/sample.png"),
    price: 270000,
    discountPrice: 188000,
    discount: 30,
    rating: 4.9,
    sold: 1200,
  },
  {
    id: "3",
    name: "Gel Tẩy Tế Bào Chết Caryophy",
    image: require("../../assets/img/sample.png"),
    price: 450000, // Giá gốc
    discountPrice: 278000, // Giá giảm
    discount: 38, // % giảm giá
    rating: 5.0, // Đánh giá sao
    sold: 320, // Lượt mua/tháng
  },
  {
    id: "4",
    name: "Gel Tẩy Tế Bào Chết Caryophy",
    image: require("../../assets/img/sample.png"),
    price: 450000, // Giá gốc
    discountPrice: 278000, // Giá giảm
    discount: 38, // % giảm giá
    rating: 5.0, // Đánh giá sao
    sold: 320, // Lượt mua/tháng
  },
];
const ProductItem = ({
  name,
  image,
  price,
  discountPrice,
  discount,
  rating,
  sold,
}) => (
  <View style={styles.productItem}>
    {/* Hình ảnh sản phẩm */}
    <Image source={image} style={styles.productImage} />

    {/* Phần trăm giảm giá */}
    <View style={styles.discountBadge}>
      <Text style={styles.discountText}>{discount}%</Text>
    </View>

    {/* Tên sản phẩm */}
    <Text style={styles.productName}>{name}</Text>

    {/* Giá sản phẩm */}
    <View style={styles.priceContainer}>
      <Text style={styles.discountPrice}>
        {discountPrice.toLocaleString()}đ
      </Text>
      <Text style={styles.originalPrice}>{price.toLocaleString()}đ</Text>
    </View>

    {/* Đánh giá & lượt mua */}
    <View style={styles.ratingContainer}>
      <Text style={styles.rating}>⭐ {rating}</Text>
      <Text style={styles.sold}>({sold}) </Text>
    </View>
  </View>
);

const ProductList = () => {
  return (
    <FlatList
      data={products}
      numColumns={2} // Hiển thị 2 cột
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ProductItem
          name={item.name}
          image={item.image}
          price={item.price}
          discountPrice={item.discountPrice}
          discount={item.discount}
          rating={item.rating}
          sold={item.sold}
        />
      )}
      contentContainerStyle={styles.productList}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  productList: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  productItem: {
    flex: 1,
    margin: 8,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    elevation: 2, // Đổ bóng nhẹ
    position: "relative",
  },
  discountBadge: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "#86A788",
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  discountText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 12,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  discountPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: "red",
    marginRight: 5,
  },
  originalPrice: {
    fontSize: 12,
    textDecorationLine: "line-through",
    color: "#888",
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 5,
  },
  rating: {
    fontSize: 12,
    color: "#FFA500",
  },
  sold: {
    fontSize: 12,
    color: "#888",
  },
});

export default ProductList;
