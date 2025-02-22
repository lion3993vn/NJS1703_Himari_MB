import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

const PaymentHeader = () => {
  const navigation = useNavigation();
  
  return (
    <View className="bg-[#FFC0CB] p-4">
      <View className="flex-row items-center">
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          className="w-8 h-8 justify-center"
        >
          <Text className="text-2xl text-black">
          <Ionicons name="chevron-back" size={28} color="#fff" />
          </Text>
        </TouchableOpacity>
        <View className="flex-1">
          <Text className="text-center text-xl font-medium">Thông tin thanh toán</Text>
          <Text className="text-center text-sm text-gray-600">05:00 27/05 • Hồ Chí Minh - Cần Thơ</Text>
        </View>
        <View style={{width: 32}} />
      </View>
    </View>
  );
};

export default PaymentHeader;
