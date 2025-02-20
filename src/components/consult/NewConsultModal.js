import React, { useState } from "react";
import { Modal, Pressable, Text, TextInput } from "react-native";

const CreateConsultModal = ({ visible, onClose }) => {
  const [problem, setProblem] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      {/* Lớp ngoài (overlay) */}
      <Pressable
        className="flex-1 bg-[rgba(0,0,0,0.4)] justify-center items-center"
        onPress={onClose} 
      >
        {/* Lớp trong (nội dung modal) */}
        <Pressable
          className="w-[80%] bg-white rounded-xl overflow-hidden"
          onPress={(e) => e.stopPropagation()} // Chặn sự kiện chạm
        >
          {/* Header */}
          <Pressable className="bg-[#FE99AD] px-4 py-3 flex-row justify-between items-center">
            <Text className="text-white text-lg font-bold">
              Tạo Cuộc Tư Vấn
            </Text>
            <Pressable onPress={onClose}>
              <Text className="text-white text-lg font-bold">X</Text>
            </Pressable>
          </Pressable>

          {/* Body */}
          <Pressable className="px-4 py-3">
            <Text className="mb-1 font-medium">Bạn đang gặp vấn đề gì?</Text>
            <TextInput
              className="border border-gray-300 rounded px-3 py-2 mb-3"
              placeholder="Nhập vấn đề..."
              value={problem}
              onChangeText={setProblem}
            />

            <Text className="mb-1 font-medium">Loại:</Text>
            <Pressable
              className="border border-gray-300 rounded px-3 py-2 mb-3"
              onPress={() => setCategory("Da tay")} 
            >
              <Text className="text-gray-600">
                {category ? category : "Choose"}
              </Text>
            </Pressable>

            <Text className="mb-1 font-medium">Hình ảnh (nếu có):</Text>
            <Pressable
              className="border border-gray-300 rounded px-3 py-2 mb-3"
              onPress={() => setImage("sample-image.jpg")} 
            >
              <Text className="text-gray-600">
                {image ? image : "Choose image"}
              </Text>
            </Pressable>

            <Text className="mb-1 font-medium">Mô tả vấn đề của bạn:</Text>
            <TextInput
              className="border border-gray-300 rounded px-3 py-2"
              style={{ textAlignVertical: "top", height: 100 }}
              placeholder="Nhập mô tả..."
              multiline
              numberOfLines={4}
              value={description}
              onChangeText={setDescription}
            />
          </Pressable>

          {/* Footer */}
          <Pressable className="flex-row justify-end px-4 py-3 border-t border-gray-200">
            <Pressable
              className="bg-[#F1F1F1] px-5 py-2 rounded mr-3"
              onPress={onClose}
            >
              <Text className="text-gray-800">Hủy Bỏ</Text>
            </Pressable>
            <Pressable
              className="bg-[#FE99AD] px-5 py-2 rounded"
              onPress={() => {
                // Xử lý tạo cuộc tư vấn
                onClose();
              }}
            >
              <Text className="text-white font-bold">Tạo</Text>
            </Pressable>
          </Pressable>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default CreateConsultModal;
