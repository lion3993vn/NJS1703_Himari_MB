// ChatScreen.js
import React from "react";
import { View, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import ChatHeader from "../components/chat/ChatHeader";
import ChatMessages from "../components/chat/ChatMessages";
import ChatInput from "../components/chat/ChatInput";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenWrapper from "../components/layout/ScreenWrapper ";

const ChatScreen = () => {
  const route = useRoute();
  // Lấy consult được truyền qua
  const { consult } = route.params || {};
  // Tuỳ ý: Tạo state messages = [ ... ] hoặc fetch theo consult.id
  const messages = [
    { id: "1", text: "Chào tran duchi! ...", sender: "bot" },
    {
      id: "2",
      text: consult ? consult.message : "Không có dữ liệu",
      sender: "user",
    },
  ];

  const handleSendMessage = (newMessageText) => {
    console.log("Gửi tin:", newMessageText);
  };

  return (
    <ScreenWrapper>
      <SafeAreaView style={{ flex: 1 }}>
        <ChatHeader title="HimaBot - Tư Vấn" />
        <ChatMessages messages={messages} />
        <ChatInput onSend={handleSendMessage} />
      </SafeAreaView>
    </ScreenWrapper>
  );
};

export default ChatScreen;
