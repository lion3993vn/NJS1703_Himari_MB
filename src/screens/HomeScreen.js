import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductList from "../components/product/ProductList";
import CategoryList from "../components/categories/CategoryList";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Banner />

      {/* Categories */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Danh mục</Text>
        <Text style={styles.viewAll}>Xem tất cả</Text>
      </View>
      <CategoryList />

      {/* Products */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Sản phẩm</Text>
        <Text style={styles.viewAll}>Xem tất cả</Text>
      </View>
      <View style={styles.productList}>
        <ProductList />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingTop: 35 },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold", color: "#27ae60" },
  viewAll: { color: "#2980b9" },
  categories: { flexDirection: "row", paddingHorizontal: 10 },
  productList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
});
