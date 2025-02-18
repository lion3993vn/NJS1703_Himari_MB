import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";

const NewConsultModal = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="w-72 bg-white rounded-2xl p-8 items-center shadow-lg">
          <Text className="mb-4 text-center text-xl font-bold">Tư Vấn Mới</Text>
          {/* Add your form or content here */}
          <TouchableOpacity
            className="bg-[#FE99AD] rounded-xl py-2 px-4"
            onPress={onClose}
          >
            <Text className="text-white font-bold text-center">Đóng</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default NewConsultModal;
