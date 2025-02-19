import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ChatBubble = ({ message }) => {
  const isBot = message.sender === "bot";

  return (
    <View style={[styles.bubble, isBot ? styles.botBubble : styles.userBubble]}>
      <Text style={styles.text}>{message.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bubble: {
    maxWidth: "80%",
    marginVertical: 4,
    padding: 10,
    borderRadius: 12,
  },
  botBubble: {
    backgroundColor: "#FEF2F2",
    alignSelf: "flex-start",
  },
  userBubble: {
    backgroundColor: "#D6336C",
    alignSelf: "flex-end",
  },
  text: {
    color: "#333",
  },
});

export default ChatBubble;
