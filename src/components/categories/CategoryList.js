import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";

// Danh sách dữ liệu giả định cho danh mục
const { width } = Dimensions.get("window");
const ITEM_WIDTH = 100; // Độ rộng mỗi danh mục (tùy chỉnh)
const SPACING = 10; // Khoảng cách giữa các mục
const categories = [
  {
    id: "1",
    name: "Trang Điểm Môi",
    image: require("../../../assets/img/sample.png"),
  },
  {
    id: "2",
    name: "Trang Điểm Mắt",
    image: require("../../../assets/img/sample.png"),
  },
  {
    id: "3",
    name: "Trang Điểm Mặt",
    image: require("../../../assets/img/sample.png"),
  },
  { id: "4", name: "Mặt Nạ", image: require("../../../assets/img/sample.png") },
  {
    id: "5",
    name: "Sữa Rửa Mặt",
    image: require("../../../assets/img/sample.png"),
  },
  {
    id: "6",
    name: "Dầu Gội",
    image: require("../../../assets/img/sample.png"),
  },
  {
    id: "7",
    name: "Dưỡng Da",
    image: require("../../../assets/img/sample.png"),
  },
  {
    id: "8",
    name: "Nước Hoa",
    image: require("../../../assets/img/sample.png"),
  },
];
const backgroundColors = [
  "#FFD700",
  "#FFA07A",
  "#98FB98",
  "#87CEFA",
  "#FF69B4",
  "#FFA500",
  "#DDA0DD",
  "#20B2AA",
];
const CategoryItem = ({ name, image, bgColor }) => (
  <View style={[styles.categoryItem, { backgroundColor: bgColor }]}>
    <View style={styles.imageContainer}>
      <Image source={image} style={styles.categoryImage} />
    </View>
    <Text style={styles.categoryText}>{name}</Text>
  </View>
);

const CategoryList = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scrollContainer}
    >
      <View style={styles.categoryWrapper}>
        {categories.map((item, index) => (
          <CategoryItem
            key={item.id}
            name={item.name}
            image={item.image}
            bgColor={backgroundColors[index % backgroundColors.length]}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 10,
  },
  categoryWrapper: {
    flexDirection: "row",
    flexWrap: "wrap", // Tự động xuống hàng
    width: width * 1.5, // Độ rộng tổng thể lớn hơn màn hình để có thể kéo ngang
  },
  categoryItem: {
    width: ITEM_WIDTH,
    alignItems: "center",
    marginRight: SPACING,
    marginBottom: SPACING, // Tạo khoảng cách giữa các hàng
    backgroundColor: "red",
    padding: 10,
    borderRadius: 20,
    height: 150,
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  categoryText: {
    paddingVertical: 10,
    fontSize: 14,
    marginTop: 5,
    textAlign: "center",
  },
});

export default CategoryList;
