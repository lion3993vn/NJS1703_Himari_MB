import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

const Blog = () => {
  return (
    <View className="p-5 mx-2">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-3">
        <Text className="text-2xl font-bold text-[#FE99AD]">Blog</Text>
        <Link href="/blog" asChild>
          <TouchableOpacity>
            <Text className="text-[#FE99AD] text-md">Xem tất cả &gt;</Text>
          </TouchableOpacity>
        </Link>
      </View>

      {/* Ảnh Blog */}
      <View className="mt-2 rounded-lg overflow-hidden">
        <Image
          source={require("../../../assets/img/blogtest.png")}
          className="w-full h-60"
          resizeMode="stretch"
        />
      </View>
    </View>
  );
};

export default Blog;
