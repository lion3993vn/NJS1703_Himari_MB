import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import ProductItem from "./ProductItem";

// Import hình ảnh sản phẩm
import productImage from "../../../assets/img/sampleproduct.png";
import { products } from "./product";

const FeaturedProducts = () => {
  return (
    <View className="p-5 bg-white rounded-lg mx-2">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-3">
        <Text className="text-lg font-bold text-[#FE99AD]">
          Sản Phẩm Nổi Bật
        </Text>
        <Link href="/all-products" asChild>
          <TouchableOpacity>
            <Text className="text-[#FE99AD] text-md">Xem tất cả &gt;</Text>
          </TouchableOpacity>
        </Link>
      </View>

      {/* Danh sách sản phẩm */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex-row"
      >
        {products.map((product) => (
          <ProductItem
            key={product.id}
            image={product.image}
            title={product.name}
            price={`VND ${product.price.toLocaleString()}`}
            start={product.rating}
            purchase={product.sold}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedProducts;
