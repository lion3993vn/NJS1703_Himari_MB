import React from "react";
import { FlatList, View } from "react-native";
import ChatBubble from "./ChatBubble";

const ChatMessages = ({ messages }) => {
  return (
    <FlatList
      data={messages}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ChatBubble message={item} />}
      contentContainerStyle={{ padding: 10 }}
      // Đảm bảo cuộn được từ dưới lên
      inverted
    />
  );
};

export default ChatMessages;
