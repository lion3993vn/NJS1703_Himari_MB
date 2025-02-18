import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import Consults from "../components/consult/consult";
import { consultData } from "../data/consultData";
import NewConsultModal from "../components/consult/NewConsultModal";

export const ConsultScreen = () => {
  const [consultDataState, setConsultDataState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Giả lập thời gian load API (Fake API Call)
    setTimeout(() => {
      setConsultDataState(consultData);
      setLoading(false);
    }, 1000);
  }, []);

  // Nhóm dữ liệu theo category
  const groupedData = consultDataState.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <View className="flex-1 p-4">
      <Text className="text-xl font-bold text-center text-pink-600 mb-4">
        HimaBot - Tư Vấn
      </Text>

      {/* Dùng flex-1 để đẩy nút xuống dưới */}
      <View className="flex-1 space-y-4">
        {loading ? (
          <ActivityIndicator size="large" color="#D6336C" />
        ) : (
          <Consults groupedData={groupedData} />
        )}
      </View>

      {/* View này sẽ luôn nằm dưới cùng */}
      <View className="mt-5">
        <TouchableOpacity
          style={{ alignSelf: "center", width: 150 }}
          className="bg-[#FE99AD] py-4 px-6 rounded-full items-center mx-auto"
          onPress={() => setModalVisible(true)}
        >
          <Text className="text-white text-xl font-bold">+ Tư Vấn Mới</Text>
        </TouchableOpacity>
      </View>
      <NewConsultModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};
