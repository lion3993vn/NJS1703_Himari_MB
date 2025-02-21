import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";
import useGoogleAuth from "../api/googleAuth";
import useAuth from "../context/AuthContext";

const LoginScreen = () => {
  const navigation = useNavigation();
  const { promptAsync } = useGoogleAuth();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFC0CB" }}>
      <View className="flex-1 bg-white items-center">
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="close" size={24} color="#fff" />
          </TouchableOpacity>
          <Text className="text-2xl font-bold text-white">Đăng Nhập</Text>
          <View style={{ width: 24 }} />
        </View>
        <Image
          source={require("../../assets/img/Logo.png")}
          style={styles.logo}
        />
        <Text className="text-2xl text-gray-700 my-2">Đăng nhập với</Text>
        {/* Nút đăng nhập Google */}
        <TouchableOpacity
          style={styles.googleButton}
          onPress={() => promptAsync()}
        >
          <Image
            source={require("../../assets/img/googlebutton.png")}
            style={styles.googleIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFC0CB",
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 10,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginVertical: 20,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 200,
    marginTop: 10,
  },
  googleIcon: {
    width: 250,
    height: 130,
    resizeMode: "contain",
    borderRadius: 200,
    transperent: 1,
  },
});

export default LoginScreen;
