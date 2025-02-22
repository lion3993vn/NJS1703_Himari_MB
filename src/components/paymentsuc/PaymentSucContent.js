import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PaymentContent = ({ orderCode, transactionId }) => {
  const navigation = useNavigation();
  
  return (
    <View className="flex-1 justify-center items-center px-6">
      <Image 
        source={require('../../../assets/img/circle-check.png')}
        className="w-20 h-20 mb-4"
        resizeMode="contain"
      />
      
      <Text className="text-2xl font-bold mb-2">Tất cả đã xong</Text>
      
      <Text className="text-center text-gray-600 mb-4">
        Bạn vừa thanh toán thành công{'\n'}
        cho đơn hàng {orderCode || ''}
      </Text>
      
      <Text className="text-gray-500 mb-2">Mã giao dịch: {transactionId || ''}</Text>
      
      <TouchableOpacity 
        onPress={() => navigation.navigate('TransactionScreen')}
        className="mt-4"
      >
        <Text className="text-blue-500">Xem chi tiết tại trang giao dịch</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentContent;