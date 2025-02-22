import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const UserInfo = ({ userInfo }) => {
  return (
    <View className="p-4 border-b border-gray-100">
      <View className="flex-row items-start">
        <Ionicons name="location-outline" size={22} color="#666" className="mt-1" />
        <View className="flex-1 ml-3">
          <Text className="text-base">
            <Text className="font-medium">{userInfo.name}</Text> | {userInfo.phone}
          </Text>
          <Text className="text-gray-500 mt-1">{userInfo.address}</Text>
        </View>
        <TouchableOpacity>
          <Text className="text-gray-500">Thay đổi ›</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserInfo; 