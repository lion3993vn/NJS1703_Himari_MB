import React from "react";
import { View, TextInput, TouchableOpacity, Image, Text } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import Search from "react-native-vector-icons/AntDesign";
import Logo from "../../assets/img/Logo.png";

const Header = () => {
  return (
    <View className="flex-row items-center bg-[#ebb3be] pt-12 px-1">
      <Image source={Logo} className="w-16 h-16" />
      <View className="flex-1 flex-row items-center border-none bg-white rounded-xl mx-3 py-1">
        <TextInput
          placeholder="Tìm kiếm sản phẩm"
          className="flex-1 px-4 text-[#FE99AD] "
        />
        <TouchableOpacity className="bg-[#FE99AD] mr-4 px-2 py-1 rounded-xl">
          <Search name="search1" size={22} color="#FFF" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity className="mr-5">
        <View className="bg-[#d6d4d4] p-2 rounded-full blur-3xl">
          <FontAwesome
            name="bell"
            size={22}
            color="#FFF"
            className="relative"
          />
          <Text className="absolute top-0 right-[-5] text-white rounded-lg px-1 bg-orange-500">
            4
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
