import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ProductItem = ({
  brandName,
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

    {/* Badge giảm giá */}
    <View style={styles.discountBadge}>
      <Text style={styles.discountText}>{discount}%</Text>
    </View>
    {/* Giá */}
    <View style={styles.priceContainer}>
      <Text style={styles.discountPrice}>
        {discountPrice.toLocaleString()}đ
      </Text>
      <Text style={styles.originalPrice}>{price.toLocaleString()}đ</Text>
    </View>
    {/* Thương hiệu */}
    <Text style={styles.brandName}>{brandName}</Text>

    {/* Tên sản phẩm */}
    <Text numberOfLines={2} style={styles.productName}>
      {name}
    </Text>

    {/* Đánh giá & lượt mua */}
    <View style={styles.bottomContainer}>
      <Text style={styles.rating}>⭐ {rating}</Text>
      <Text style={styles.sold}>{sold.toLocaleString()} đã bán</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  productItem: {
    flex: 1,
    margin: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    elevation: 2, // Đổ bóng nhẹ
    position: "relative",
  },
  discountBadge: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "#86A788",
    borderColor: "#FFA500", // Màu cam nổi bật
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 5,
    borderWidth: 1,
  },
  discountText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 12,
  },
  productImage: {
    width: "100%",
    height: 120,
    borderRadius: 10,
    resizeMode: "contain",
    backgroundColor: "#f8f8f8",
  },
  brandName: {
    fontSize: 12,
    color: "#008000",
    marginTop: 5,
    fontWeight: "600",
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginTop: 3,
    height: 40,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  discountPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#E68045",
    marginRight: 5,
  },
  originalPrice: {
    fontSize: 12,
    textDecorationLine: "line-through",
    color: "#888",
    marginLeft: 30,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  rating: {
    fontSize: 12,
    color: "#FFA500",
    fontWeight: "600",
  },
  sold: {
    fontSize: 12,
    color: "#888",
  },
});

export default ProductItem;
