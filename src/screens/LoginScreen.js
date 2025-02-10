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

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
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

      {/* Input Email / Phone */}
      <View>
        
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email/ Số điện thoại"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
      />

      {/* Input Password */}
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Quên mật khẩu */}
      <TouchableOpacity onPress={() => alert("Chức năng đang phát triển!")} style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPassword}>Quên mật khẩu?</Text>
      </TouchableOpacity>

      {/* Nút Đăng Nhập */}
      <TouchableOpacity
        style={[styles.loginButton, !(email && password) && styles.disabled]}
        disabled={!(email && password)}
        onPress={() => alert("Đăng nhập thành công!")}
      >
        <Text style={styles.loginText}>Đăng Nhập</Text>
      </TouchableOpacity>

      {/* Điều hướng đến Đăng ký */}
      <TouchableOpacity onPress={() => navigation.navigate("Register")} style={styles.registerContainer}>
        <Text style={styles.registerText}>
          Bạn chưa có tài khoản đăng nhập? <Text style={styles.registerLink}>Đăng ký</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop:30,
    paddingHorizontal:10
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFC0CB",
    paddingHorizontal: 20,
    paddingVertical: 15,
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
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#F9F9F9",
    marginBottom: 10,
  },
  forgotPasswordContainer: {
    width: "100%",
    alignItems: "flex-end",
  },
  forgotPassword: {
    color: "#FF4081",
    fontSize: 14,
    marginBottom: 20,
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFB6C1",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  disabled: {
    backgroundColor: "#FFC0CB",
    opacity: 0.5,
  },
  loginText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  registerContainer: {
    width: "100%",
    backgroundColor: "#FFF0C1",
    paddingVertical: 12,
    marginTop: 10,
    alignItems: "center",
    borderRadius: 8,
  },
  registerText: {
    fontSize: 14,
    color: "black",
  },
  registerLink: {
    color: "#FF4081",
    fontWeight: "bold",
  },
});

export default LoginScreen;
