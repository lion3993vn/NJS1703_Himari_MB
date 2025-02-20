import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView edges={["top", "left", "right"]} style={{ flex: 1, backgroundColor:"#FFC0CB" }}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="close" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Đăng Nhập</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Logo */}
        <Image
          source={require("../../assets/img/Logo.png")}
          style={styles.logo}
        />
        <Text style={styles.text}>Đăng nhập với</Text>

        {/* Nút đăng nhập Google */}
        <TouchableOpacity style={styles.googleButton}>
          <Image source={require("../../assets/img/googlebutton.png")} />
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
    paddingTop: 10
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginVertical: 20,
  },
  text: {
    fontSize: 20,
    color: "#555",
    marginVertical: 10,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
});

export default LoginScreen;
