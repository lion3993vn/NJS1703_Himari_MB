import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import HomeScreen from "../screens/HomeScreen";
import CategoryScreen from "../screens/CategoryScreen";
import CartScreen from "../screens/CartScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#37805F",
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
  );
}
