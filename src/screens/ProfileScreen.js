import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import Search from "react-native-vector-icons/AntDesign";
import User from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import Scan from "react-native-vector-icons/MaterialCommunityIcons";
const ProfileScreen = () => {
  const navigation = useNavigation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <Search name="search1" size={22} style={styles.searchIcon} />
          <TextInput placeholder="Quản lý tài khoản" />
        </View>
        <TouchableOpacity>
          <Scan name="line-scan" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
      {/* User Info */}
      <View style={styles.userInfo}>
        {isLoggedIn ? (
          <>
            <Image
              source={{ uri: "https://via.placeholder.com/50" }}
              style={styles.avatar}
            />
            <View style={styles.userDetails}>
              <Text style={styles.userName}>Trong Minh</Text>
              <Text style={styles.userCoins}>0 Xu</Text>
            </View>
          </>
        ) : (
          <View style={styles.authContainer}>
            <TouchableOpacity
              style={styles.LoginLogoutButton}
              onPress={() => navigation.navigate("Login")}
            >
              <User name="user-circle" size={20} style={styles.Icon} />
              <Text style={styles.authText}>Đăng Nhập</Text>
            </TouchableOpacity>
            <Text style={styles.centerWall}>|</Text>
            <TouchableOpacity
              style={styles.LoginLogoutButton}
              onPress={() => setIsLoggedIn(true)}
            >
              <Text style={styles.authText}>Đăng Ký</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      {/* Khu vực */}
      <TouchableOpacity style={styles.locationBox}>
        <Text style={styles.locationTitle}>📍 Khu vực bạn chọn hiện tại</Text>
        <Text style={styles.locationText}>
          Phường Nguyễn An Ninh, Thành Phố Vũng Tàu, Bà Rịa Vũng Tàu
        </Text>
      </TouchableOpacity>
      {/* Đơn hàng */}
      <View style={styles.section}>
        <View style={styles.orderSection}>
          <Text style={styles.sectionTitle}>Đơn hàng</Text>
          <Text style={styles.viewAll}>
            Xem tất cả <AntDesign name="right" size={18} />
          </Text>
        </View>
        <View style={styles.orderContainer}>
          {[
            { icon: "check-square", text: "Mới đặt" },
            { icon: "truck", text: "Đang xử lý" },
            { icon: "check-circle", text: "Thành công" },
            { icon: "refresh-cw", text: "Đã hủy" },
          ].map((item, index) => (
            <TouchableOpacity key={index} style={styles.orderItem}>
              <Feather name={item.icon} size={24} color="#6EE7B7" />
              <Text style={styles.orderText}>{item.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      {/* Sản phẩm đã mua */}
      <View style={styles.section}>
        <View style={styles.orderSection}>
          <Text style={styles.sectionTitle}>Sản phẩm đã mua</Text>
          <Text style={styles.viewAll}>
            Xem tất cả <AntDesign name="right" size={18} />
          </Text>
        </View>
        <ScrollView horizontal style={styles.productScroll}>
          {[
            { name: "Viên uống DHC", price: "100.000 đ" },
            { name: "Bông tẩy trang", price: "26.000 đ" },
          ].map((item, index) => (
            <View key={index} style={styles.productBox}>
              <Image
                source={{ uri: "https://via.placeholder.com/80" }}
                style={styles.productImage}
              />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      {/* Menu chức năng */}
      <View style={styles.section}>
        <View style={styles.gridContainer}>
          {[
            { icon: "eye", text: "Đã xem" },
            { icon: "heart", text: "Yêu thích" },
            { icon: "star", text: "Đánh giá" },
            { icon: "gift", text: "Đổi quà" },
            { icon: "user", text: "Cá nhân" },
            { icon: "map-pin", text: "Số địa chỉ" },
            { icon: "help-circle", text: "Hỏi đáp" },
            { icon: "help-circle", text: "Hỏi đáp" },
          ].map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <Feather name={item.icon} size={24} color="#6B7280" />
              <Text style={styles.menuText}>{item.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    backgroundColor: "#FEE2E2",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 50,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
    backgroundColor: "#fff",
    gap: 10,
    borderRadius: 5,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#FEE2E2",
  },
  avatar: { width: 50, height: 50, borderRadius: 25, backgroundColor: "#ccc" },
  userDetails: { marginLeft: 10 },
  userName: { fontSize: 18, fontWeight: "bold", color: "#333" },
  userCoins: { fontSize: 14, color: "#777" },
  authContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Icon: {
    marginRight: 5,
    alignSelf: "center",
  },
  LoginLogoutButton: {
    // backgroundColor: "#FF6B6B",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  centerWall: {
    paddingVertical: 9,
    color: "#fff",
    height: 40,
  },
  authText: {
    color: "white",
    fontWeight: "bold",
  },
  locationBox: {
    backgroundColor: "#fff",
    padding: 15,
    margin: 10,
    borderRadius: 10,
    elevation: 10,
  },
  locationTitle: { fontWeight: "bold", color: "#333" },
  locationText: { color: "#555" },
  orderSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  viewAll: { color: "#666666" },
  section: { padding: 10 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", color: "#333" },
  orderContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  orderItem: { alignItems: "center" },
  orderText: { color: "#555", fontSize: 12, marginTop: 5 },
  productScroll: { marginTop: 10 },
  productBox: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    //
    marginRight: 10,
  },
  productImage: { width: 80, height: 80, borderRadius: 10 },
  productName: { fontSize: 12, color: "#333", marginTop: 5 },
  productPrice: { fontSize: 14, fontWeight: "bold", color: "#FF69B4" },
  buyAgainButton: {
    backgroundColor: "#FFE4E6",
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
  },
  buyAgainText: { color: "#FF69B4", fontSize: 12 },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  menuItem: { alignItems: "center", width: "25%", padding: 10 },
  menuText: { fontSize: 12, color: "#555", marginTop: 5 },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderColor: "#ddd",
    padding: 10,
  },
  navItem: { alignItems: "center" },
  navText: { fontSize: 12, color: "#555" },
  navTextActive: { color: "#10B981", fontWeight: "bold" },
});

export default ProfileScreen;
