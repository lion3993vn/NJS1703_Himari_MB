import React from "react";
import { View, TextInput, TouchableOpacity, Image } from "react-native";
import Scan from "react-native-vector-icons/MaterialCommunityIcons";
import Location from "react-native-vector-icons/Entypo";
import TrackingOrder from "react-native-vector-icons/Entypo";
import Search from "react-native-vector-icons/AntDesign";
import Logo from "../../assets/img/Logo.png";

const Header = () => {
  return (
    <View className="flex-row items-center bg-[#F0D1D7] mt-7">
      <Image source={Logo} className="w-16 h-16" />
      <View className="flex-1 flex-row items-center border border-black bg-white rounded-full mx-3">
        <Search name="search1" size={22} className="ml-3" />
        <TextInput placeholder="Tìm kiếm sản phẩm" className="flex-1 px-4 " />
      </View>
      <TouchableOpacity className="ml-3">
        <Scan name="line-scan" size={22} />
      </TouchableOpacity>
      <TouchableOpacity className="ml-3">
        <Location name="location-pin" size={22} />
      </TouchableOpacity>
      <TouchableOpacity className="ml-3">
        <TrackingOrder name="box" size={22} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
