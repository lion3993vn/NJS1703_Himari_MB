import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const PaymentMethods = () => {
  const [selectedMethod, setSelectedMethod] = useState('PayOS'); // Mặc định chọn PayOS

  return (
    <View className="px-4 py-3 ">
      <View className="flex-row justify-between items-center mb-3">
        <Text className="text-lg">Phương thức thanh toán</Text>
        
      </View>

      <TouchableOpacity 
        className="flex-row items-center bg-white p-4 rounded-lg mb-2"
        onPress={() => setSelectedMethod('PayOS')}
      >
        <Image 
          source={require('../../../assets/img/PayOS.png')} 
          className="w-[35px] h-[35px]"
          resizeMode="contain"
        />
        <Text className="flex-1 ml-3">Thanh toán qua PayOS</Text>
        <View className={`h-5 w-5 rounded-full border-2 ${selectedMethod === 'PayOS' ? 'bg-blue-500 border-blue-500' : 'border-gray-300'}`}>
          {selectedMethod === 'PayOS' && (
            <Text className="text-white text-center text-xs">✓</Text>
          )}
        </View>
      </TouchableOpacity>

      <TouchableOpacity 
        className="flex-row items-center bg-white p-4 rounded-lg"
        onPress={() => setSelectedMethod('Momo')}
      >
        <Image 
          source={require('../../../assets/img/MoMo.png')} 
          className="w-[35px] h-[35px]"
          resizeMode="contain"
        />
        <Text className="flex-1 ml-3">Thanh toán qua Momo</Text>
        <View className={`h-5 w-5 rounded-full border-2 ${selectedMethod === 'Momo' ? 'bg-blue-500 border-blue-500' : 'border-gray-300'}`}>
          {selectedMethod === 'Momo' && (
            <Text className="text-white text-center text-xs">✓</Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentMethods; 