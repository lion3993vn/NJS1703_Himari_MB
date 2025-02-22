import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PaymentButton = () => {
  const navigation = useNavigation();
  
  return (
    <View className="px-4 py-4">
      <TouchableOpacity 
        onPress={() => navigation.navigate('Main')}
        className="bg-gray-100 py-4 rounded-lg"
      >
        <Text className="text-black text-center font-medium">Trở về trang chủ</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentButton;