import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import BottomNavigation from "./BottomNavigation";

const Stack = createStackNavigator();

export default function RootLayout() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Ứng dụng mở vào màn hình chính (Bottom Tabs) */}
        <Stack.Screen name="Main" component={BottomNavigation} />
        
        {/* Khi bấm đăng nhập, sẽ điều hướng đến Login */}
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* <Stack.Screen name="Register" component={RegisterScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
