import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useRoute, useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, StyleSheet } from "react-native";

import HomeScreen from "../screens/HomeScreen";
import CategoryScreen from "../screens/CategoryScreen";
import CartScreen from "../screens/CartScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: "#F6BDC8",
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Trang Chủ") iconName = "home";
            else if (route.name === "Danh Mục") iconName = "apps";
            else if (route.name === "Giỏ Hàng") iconName = "cart";
            else if (route.name === "Thông Báo") iconName = "bell";
            else if (route.name === "Tài Khoản") iconName = "account";

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Trang Chủ" component={HomeScreen} />
        <Tab.Screen name="Danh Mục" component={CategoryScreen} />
        <Tab.Screen name="Giỏ Hàng" component={CartScreen} />
        <Tab.Screen name="Thông Báo" component={NotificationsScreen} />
        <Tab.Screen name="Tài Khoản" component={ProfileScreen} />
      </Tab.Navigator>

      {/* Bong bóng chat */}
      <ChatBubble />
    </>
  );
}

// 📌 Bong bóng chat
function ChatBubble() {
  const route = useRoute();
  const navigation = useNavigation();

  // Chỉ hiển thị bong bóng trên các trang này
  const showChatBubble = ["Trang Chủ", "Danh Mục", "Tài Khoản"].includes(
    route.name
  );

  if (!showChatBubble) return null;

  return (
    <TouchableOpacity
      style={styles.chatBubble}
      onPress={() => navigation.navigate("Chat")}
    >
      <Icon name="chat" size={28} color="#fff" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chatBubble: {
    position: "absolute",
    bottom: 80,
    right: 20,
    backgroundColor: "#FF5733",
    width: 55,
    height: 55,
    borderRadius: 27.5,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
});
