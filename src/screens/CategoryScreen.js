import React, { useState } from "react";
import { FlatList } from "react-native";
import CategoryTabs from "../components/categories/CategoryTabs";
import HeaderCategory from "../components/categories/HeaderCategory";
import FilterTabs from "../components/categories/filter/FilterTabs";
import ProductCardCategory from "../components/product/ProductCardCategory";
import { products } from "../components/product/product";
import { SafeAreaView } from "react-native-safe-area-context";

const CategoryScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("Da");
  const [selectedFilter, setSelectedFilter] = useState("Mới Nhất");

  return (
    <SafeAreaView edges={["top", "left", "right"]} style={{ flex: 1, backgroundColor:"white" }}>
      <FlatList
        data={products} // Dữ liệu sản phẩm
        numColumns={2} // Hiển thị dạng lưới 2 cột
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCardCategory product={item} />}
        columnWrapperStyle={{
          justifyContent: "space-around",
          paddingHorizontal: 20,
        }}
        // Phần tiêu đề danh sách (chứa Header, Tabs, Filter)
        ListHeaderComponent={() => (
          <>
            <HeaderCategory title="Danh Mục" />
            <CategoryTabs
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
            <FilterTabs
              selectedFilter={selectedFilter}
              onSelect={setSelectedFilter}
            />
          </>
        )}
        contentContainerStyle={{ paddingBottom: 20 }} // Thêm khoảng trống cuối danh sách để dễ cuộn
        showsVerticalScrollIndicator={false} // Ẩn thanh cuộn dọc
      />
    </SafeAreaView>
  );
};

export default CategoryScreen;
