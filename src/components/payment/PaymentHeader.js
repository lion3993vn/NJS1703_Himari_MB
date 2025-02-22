import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const PaymentHeader = ({ navigation }) => {
  return (
    <View className="flex-row items-center justify-between p-4 border-b border-gray-100">
      <TouchableOpacity onPress={() => navigation.goBack()} className="w-10 ">
        <Ionicons name="chevron-back" size={28} color="#fff" />
      </TouchableOpacity>
      <Text className="text-2xl flex-1 text-center font-bold text-white">Thanh toán</Text>
      <View className="w-10" />
    </View>
  );
};

export default PaymentHeader; 