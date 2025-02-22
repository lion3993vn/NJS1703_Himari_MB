import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CartFooter = ({ totalAmount, itemCount }) => {
  const navigation = useNavigation();

  const handleCheckout = () => {
    try {
      navigation.navigate('Payment');
      console.log('Navigating to Payment screen');
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  return (
    <View className="border-t border-gray-200 bg-white">
      <View className="p-4 flex-row justify-between items-center">
        <View>
          <Text className="text-gray-500 text-sm">
            Tổng tiền ({itemCount} sản phẩm)
          </Text>
          <Text className="text-xl font-bold">{totalAmount.toLocaleString()} VNĐ</Text>
        </View>
        
        <TouchableOpacity 
          className="bg-[#FE99AD] px-8 py-3 rounded-lg shadow-lg"
          onPress={handleCheckout}
        >
          <Text className="text-white text-base font-bold text-center">
            Đặt hàng
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartFooter; 