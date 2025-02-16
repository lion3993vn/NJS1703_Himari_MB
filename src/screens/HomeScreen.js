import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Header from "../components/Header";
import Banner from "../components/Banner";
// import ProductList from "../components/product/ProductList";
// import CategoryList from "../components/categories/CategoryList";
import { Link } from "expo-router";
import FeaturedProducts from "../components/product/FeaturedProducts";
import BrandList from "../components/brand/brandItem";
import Blog from "../components/blog/BlogSection";

export default function HomeScreen() {
  return (
    <ScrollView>
      <Header />
      <Banner />
      <FeaturedProducts />
      <BrandList />
      <Blog />
    </ScrollView>
  );
}

// Component hiển thị sản phẩm
