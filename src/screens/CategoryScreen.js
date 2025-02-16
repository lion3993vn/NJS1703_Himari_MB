import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { categories, categoryItems } from "../components/categories/categories";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Header from "../components/Header";

const CategoryScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.content}>
        {/* Danh sách danh mục bên trái */}
        <View style={styles.sidebar}>
          <FlatList
            data={categories}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.categoryItem,
                  selectedCategory === item.id && styles.selectedCategory,
                ]}
                onPress={() => setSelectedCategory(item.id)}
              >
                <Text
                  style={[
                    styles.categoryText,
                    selectedCategory === item.id && styles.selectedCategoryText,
                  ]}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Lưới danh mục bên phải */}
        <View style={styles.gridContainer}>
          <FlatList
            data={categoryItems}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            renderItem={({ item }) => (
              <View style={styles.gridItem}>
                <Image source={item.image} style={styles.categoryImage} />
                <Text style={styles.categoryName}>{item.name}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  content: {
    flexDirection: "row",
    flex: 1,
  },
  sidebar: {
    width: 120,
    backgroundColor: "#F5F5F5",
    // paddingVertical: 10,
  },
  categoryItem: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  selectedCategory: {
    backgroundColor: "#fff",
    borderLeftWidth: 4,
    borderLeftColor: "#FFCFCF",
  },
  categoryText: {
    fontSize: 14,
    color: "#555",
  },
  selectedCategoryText: {
    fontWeight: "bold",
    color: "#FFCFCF",
  },
  gridContainer: {
    flex: 1,
    padding: 10,
  },
  gridItem: {
    flex: 1,
    alignItems: "center",
    margin: 5,
  },
  categoryImage: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  categoryName: {
    marginTop: 5,
    fontSize: 12,
    textAlign: "center",
  },
});

export default CategoryScreen;
