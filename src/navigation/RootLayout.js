import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import BottomNavigation from "./BottomNavigation";
import ChatScreen from "../screens/ChatScreen";
import NotificationScreen from "../screens/NotificationsScreen";

const Stack = createStackNavigator();

export default function RootLayout() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Ứng dụng mở vào màn hình chính (Bottom Tabs) */}
        <Stack.Screen name="Main" component={BottomNavigation} />
        {/* Đăng ký ChatScreen */}
        <Stack.Screen name="Chat" component={ChatScreen} />
        {/* Khi bấm đăng nhập, sẽ điều hướng đến Login */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
