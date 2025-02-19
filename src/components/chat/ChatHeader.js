import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ChatHeader = ({ title }) => {
  return (
    <View>
      <Text className="text-xl font-bold text-center text-pink-600">
        {title}
      </Text>
      {/* Bạn có thể thêm icon Bot, nút Back, ... */}
    </View>
  );
};

export default ChatHeader;
