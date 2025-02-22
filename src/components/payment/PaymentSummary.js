import React from 'react';
import { View, Text } from 'react-native';

const PaymentSummary = ({ subtotal, shippingFee, total }) => {
  return (
    <View className="p-4 mt-2">
      <View className="flex-row justify-between mb-3">
        <Text className="text-gray-500">Tạm tính</Text>
        <Text>{subtotal.toLocaleString()}đ</Text>
      </View>
      <View className="flex-row justify-between mb-3">
        <Text className="text-gray-500">Phí vận chuyển</Text>
        <Text>{shippingFee.toLocaleString()}đ</Text>
      </View>
      <View className="flex-row justify-between items-center mt-3 pt-3 border-t border-gray-100">
        <Text className="text-base">Tổng thanh toán:</Text>
        <Text className="text-xl font-medium">{total.toLocaleString()}đ</Text>
      </View>
    </View>
  );
};

export default PaymentSummary; 