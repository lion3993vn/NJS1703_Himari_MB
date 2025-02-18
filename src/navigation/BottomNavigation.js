import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useRoute, useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, StyleSheet } from "react-native";

import HomeScreen from "../screens/HomeScreen";
import CategoryScreen from "../screens/CategoryScreen";
import CartScreen from "../screens/CartScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { ConsultScreen } from "../screens/ConsultScreen";
import GradientBackground from "../components/layout/gradientBackground";
import ScreenWrapper from "../components/layout/ScreenWrapper ";

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
            else if (route.name === "Tư Vấn") iconName = "chat-outline";

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Tư Vấn">
          {() => (
            <ScreenWrapper>
              <ConsultScreen />
            </ScreenWrapper>
          )}
        </Tab.Screen>
        <Tab.Screen name="Trang Chủ">
          {() => (
            <ScreenWrapper>
              <HomeScreen />
            </ScreenWrapper>
          )}
        </Tab.Screen>
        <Tab.Screen name="Danh Mục" component={CategoryScreen} />
        <Tab.Screen name="Giỏ Hàng" component={CartScreen} />
        <Tab.Screen name="Thông Báo" component={NotificationsScreen} />
        <Tab.Screen name="Tài Khoản" component={ProfileScreen} />
      </Tab.Navigator>
    </>
  );
}
