import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProductItem = ({ image, title, price }) => {
  return (
    <View style={styles.productItem}>
      <Image source={image} style={styles.productImage} />
      <Text style={styles.productTitle}>{title}</Text>
      <Text style={styles.productPrice}>{price}</Text>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  productItem: {
    width: 120,
    alignItems: "center",
    marginRight: 15,
  },
  productImage: {
    width: 100,
    height: 100,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  productPrice: {
    fontSize: 14,
    color: "#e91e63",
    fontWeight: "bold",
  },
});
