import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CheckoutButton = ({ total, onPress }) => {
  const navigation = useNavigation();
  
  const handlePayment = () => {
    onPress();
    // Giả lập quá trình thanh toán
    setTimeout(() => {
      navigation.navigate('PaymentSuccess', {
        orderCode: "OD_20242705_001",
        transactionId: "05112000"
      });
    }, 1000);
  };

  return (
    <View className="px-4 py-3 border-t border-gray-100">
      <TouchableOpacity 
        className="bg-[#FE99AD] py-3 rounded-full"
        onPress={handlePayment}
      >
        <Text className="text-white text-center text-lg font-medium">
          Đặt hàng • {total.toLocaleString()}đ
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CheckoutButton; 