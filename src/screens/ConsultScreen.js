import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import Consults from "../components/consult/consult";
import { consultData } from "../data/consultData";
import NewConsultModal from "../components/consult/NewConsultModal";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export const ConsultScreen = () => {
  const [consultDataState, setConsultDataState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation(); // Để điều hướng

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

  // Hàm xử lý khi bấm 1 consult
  const handleConsultPress = (consult) => {
    // Tuỳ ý: truyền thêm dữ liệu consult qua params
    navigation.navigate("Chat", { consult });
  };

  return (
    <SafeAreaView edges={["top", "left", "right"]} style={{ flex: 1 }}>
      <View className="flex-1 p-4">
        <Text className="text-xl font-bold text-center text-pink-600 mb-4">
          HimaBot - Tư Vấn
        </Text>
        <View className="flex-1 space-y-4">
          {loading ? (
            <ActivityIndicator size="large" color="#D6336C" />
          ) : (
            <Consults
              groupedData={groupedData}
              onConsultPress={handleConsultPress} // Truyền hàm xuống Consults
            />
          )}
        </View>
      </View>

      {/* Nút mở khung chat */}
      {/* <TouchableOpacity
        style={{
          backgroundColor: "#F580BB",
          borderRadius: 9999,
          paddingHorizontal: 20,
          paddingVertical: 12,
          marginVertical: 10,
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => navigation.navigate("Chat")} // Điều hướng đến ChatScreen
      >
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
          Chat với HimaBot
        </Text>
      </TouchableOpacity> */}

      <TouchableOpacity
        style={{
          backgroundColor: "#FE99AD",
          borderRadius: 9999,
          paddingHorizontal: 20, // giảm paddingHorizontal nếu muốn nút nhỏ hơn
          paddingVertical: 12,
          marginVertical: 10,
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => setModalVisible(true)}
      >
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          + Tư Vấn Mới
        </Text>
      </TouchableOpacity>

      <NewConsultModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </SafeAreaView>
  );
};
