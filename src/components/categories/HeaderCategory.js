import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";
import CartIcon from "react-native-vector-icons/Feather";

const HeaderCategory = ({ title = "Danh Mục" }) => {
  const navigation = useNavigation();

  return (
    <View className="flex-row justify-between items-center px-4 py-1 bg-white shadow-md">
      {/* Nút Home */}
      <TouchableOpacity onPress={() => navigation.navigate("Trang Chủ")}>
        <Icon name="home" size={40} color="#FFB6C1" />
      </TouchableOpacity>

      {/* Tiêu đề */}
      <Text className="text-lg font-bold text-[#FF6699] pl-5">{title}</Text>

      {/* Biểu tượng tìm kiếm & giỏ hàng */}
      <View className="flex-row gap-3">
        <TouchableOpacity>
          <Icon name="search1" size={30} color="#FFB6C1" />
        </TouchableOpacity>
        <TouchableOpacity>
          <CartIcon name="shopping-cart" size={30} color="#FFB6C1" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderCategory;
