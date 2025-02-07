import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";
import Header from "../components/Header";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Search Bar */}
      <View>
        <Header />
      </View>

      {/* Categories */}
      <Text style={styles.sectionTitle}>Danh mục</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categories}
      >
        {/* Category Item */}
        <View style={styles.categoryItem}>
          <Image
            source={{ uri: "https://example.com/category1.png" }}
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>Trang Diem Moi</Text>
        </View>
        {/* Repeat for other categories */}
      </ScrollView>

      {/* Products */}
      <Text style={styles.sectionTitle}>Sản phẩm</Text>
      <View style={styles.productList}>
        {/* Product Item */}
        <View style={styles.productItem}>
          <Image
            source={{ uri: "https://example.com/product1.png" }}
            style={styles.productImage}
          />
          <Text style={styles.productTitle}>Gel Tay Te Bao Chet</Text>
          <Text style={styles.productPrice}>278.000đ</Text>
        </View>
        {/* Repeat for other products */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingTop: 35 },

  searchInput: { backgroundColor: "#fff", padding: 8, borderRadius: 8 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", margin: 10 },
  categories: { flexDirection: "row", paddingHorizontal: 10 },
  categoryItem: { alignItems: "center", marginRight: 15 },
  categoryImage: { width: 60, height: 60, borderRadius: 10 },
  categoryText: { fontSize: 14, marginTop: 5 },
  productList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  productItem: {
    width: "48%",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  productImage: { width: "100%", height: 100, borderRadius: 8 },
  productTitle: { fontSize: 14, marginVertical: 5 },
  productPrice: { fontSize: 16, fontWeight: "bold", color: "#e74c3c" },
});
