import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
// Thư viện icon, ví dụ Ionicons
import Ionicons from "react-native-vector-icons/Ionicons";

const ChatInput = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim()) {
      onSend && onSend(text.trim());
      setText("");
    }
  };

  const handleFolderPress = () => {
    console.log("Folder pressed");
    // TODO: Mở file picker hoặc hành động khác
  };

  const handleImagePress = () => {
    console.log("Image pressed");
    // TODO: Mở image picker
  };

  const handleAttachPress = () => {
    console.log("Attach pressed");
    // TODO: Mở file attach
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      {/* Icon Folder */}
      <TouchableOpacity style={styles.iconButton} onPress={handleFolderPress}>
        <Ionicons name="folder" size={24} color="#666" />
      </TouchableOpacity>

      {/* Icon Image */}
      <TouchableOpacity style={styles.iconButton} onPress={handleImagePress}>
        <Ionicons name="image" size={24} color="#666" />
      </TouchableOpacity>

      {/* Icon Attach */}
      <TouchableOpacity style={styles.iconButton} onPress={handleAttachPress}>
        <Ionicons name="attach" size={24} color="#666" />
      </TouchableOpacity>

      {/* TextInput */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nhập nội dung tin nhắn..."
          value={text}
          onChangeText={setText}
        />
      </View>

      {/* Icon Send */}
      <TouchableOpacity style={styles.iconButton} onPress={handleSend}>
        <Ionicons name="send" size={24} color="#FE99AD" />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default ChatInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  iconButton: {
    paddingHorizontal: 6,
    paddingVertical: 6,
  },
  inputContainer: {
    flex: 1,
    marginHorizontal: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
  },
  input: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
});
