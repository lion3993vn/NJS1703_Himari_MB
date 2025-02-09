import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Scan from "react-native-vector-icons/AntDesign";
const ProfileScreen = () => {
  const user = {
    name: "Trọng Minh",
    points: 0,
    avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    location: "Phường Nguyễn An Ninh, TP. Vũng Tàu",
  };

  const orderStatus = [
    { id: 1, title: "Mới đặt", icon: "receipt-outline" },
    { id: 2, title: "Đang xử lý", icon: "sync-outline" },
    { id: 3, title: "Thành công", icon: "checkmark-circle-outline" },
    { id: 4, title: "Đã hủy", icon: "close-circle-outline" },
  ];

  const menuItems = [
    { id: 1, title: "Đã xem", icon: "eye-outline" },
    { id: 2, title: "Yêu thích", icon: "heart-outline" },
    { id: 3, title: "Đánh giá", icon: "star-outline" },
    { id: 4, title: "Đổi quà", icon: "gift-outline" },
    { id: 5, title: "Cá nhân", icon: "person-outline" },
    { id: 6, title: "Sổ địa chỉ", icon: "location-outline" },
    { id: 7, title: "Hỏi đáp", icon: "help-circle-outline" },
    { id: 8, title: "Thương hiệu", icon: "briefcase-outline" },
  ];

  return (
    <View style={styles.container}>
      {/* Header với gradient */}
      <View style={styles.header}>
        <TextInput style={styles.searchBar} placeholder="Quản lý tài khoản" />
        <Ionicons
          name="qr-code-outline"
          size={24}
          color="white"
          style={styles.qrIcon}
        />
      </View>

      {/* Thông tin người dùng */}
      <View style={styles.profileInfo}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <View>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userPoints}>{user.points} 💰</Text>
        </View>
      </View>

      {/* Lịch sử đặt hẹn */}
      <View style={styles.historyContainer}>
        <TouchableOpacity style={styles.historyItem}>
          <Ionicons name="alarm-outline" size={24} color="green" />
          <Text style={styles.historyText}>Lịch sử đặt hẹn SPA</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.historyItem}>
          <MaterialIcons name="history" size={24} color="green" />
          <Text style={styles.historyText}>Lịch sử liệu trình</Text>
        </TouchableOpacity>
      </View>

      {/* Đơn hàng */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Đơn hàng</Text>
        <FlatList
          data={orderStatus}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.orderItem}>
              <Ionicons name={item.icon} size={24} color="green" />
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Menu chức năng */}
      <View style={styles.section}>
        <FlatList
          data={menuItems}
          numColumns={4}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.menuItem}>
              <Ionicons name={item.icon} size={24} color="green" />
              <Text style={styles.menuText}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingTop: 35 },
  header: {
    backgroundColor: "#FFCFCF",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  searchBar: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 8,
    paddingLeft: 15,
  },
  qrIcon: { marginLeft: 10 },

  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#FFCFCF",
  },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 15 },
  userName: { fontSize: 16, fontWeight: "bold" },
  userPoints: { fontSize: 14, color: "gray" },

  historyContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#F5F5F5",
    padding: 15,
  },
  historyItem: { alignItems: "center" },
  historyText: { marginTop: 5, fontSize: 14 },

  section: { padding: 15 },
  sectionTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 10 },

  orderItem: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#F5F5F5",
    marginRight: 10,
    borderRadius: 10,
  },

  menuItem: { alignItems: "center", flex: 1, padding: 10 },
  menuText: { fontSize: 12, marginTop: 5 },
});

export default ProfileScreen;
