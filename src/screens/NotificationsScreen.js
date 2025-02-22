import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // Icon cho tab bar
import Icon from "react-native-vector-icons/AntDesign";
import { notifications } from "../components/notification/notificationsdata";
import { useNavigation } from "@react-navigation/native";

const NotificationScreen = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState("Khuyến mãi");
  const userNotifications = [];
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrowleft" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Thông báo</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "Khuyến mãi" && styles.activeTab]}
          onPress={() => setSelectedTab("Khuyến mãi")}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "Khuyến mãi" && styles.activeTabText,
            ]}
          >
            Khuyến mãi
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "Của bạn" && styles.activeTab]}
          onPress={() => setSelectedTab("Của bạn")}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "Của bạn" && styles.activeTabText,
            ]}
          >
            Của bạn
          </Text>
        </TouchableOpacity>
      </View>

      {/* Hiển thị thông báo hoặc giao diện trống */}
      {selectedTab === "Khuyến mãi" ? (
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.notificationCard}>
              <Text style={styles.title}>{item.title}</Text>
              {item.content.map((line, index) => (
                <Text key={index} style={styles.contentText}>
                  {line}
                </Text>
              ))}
              <Text style={styles.date}>{item.date}</Text>
            </View>
          )}
        />
      ) : userNotifications.length === 0 ? (
        // Hiển thị giao diện trống khi không có thông báo
        <View style={styles.emptyContainer}>
          <MaterialIcons name="sentiment-neutral" size={200} color="#999" />
          <Text style={styles.emptyText}>Hiện bạn chưa có thông báo nào</Text>
          <TouchableOpacity style={styles.shopButton}>
            <Text style={styles.shopButtonText}>TIẾP TỤC MUA SẮM</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={userNotifications}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.notificationCard}>
              <Text style={styles.title}>{item.title}</Text>
              {item.content.map((line, index) => (
                <Text key={index} style={styles.contentText}>
                  {line}
                </Text>
              ))}
              <Text style={styles.date}>{item.date}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#F6BDC8",
    alignItems: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: "center",
    borderRadius: 15,
  },
  activeTab: {
    backgroundColor: "#F6BDC8",
  },
  tabText: {
    fontSize: 16,
    color: "#FFCFCF",
  },
  activeTabText: {
    color: "white",
    fontWeight: "bold",
  },
  notificationCard: {
    backgroundColor: "#fff",
    padding: 12,
    marginHorizontal: 10,
    marginBottom: 8,
    borderRadius: 5,
    elevation: 2,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
    color: "#222",
  },
  contentText: {
    fontSize: 14,
    color: "#555",
  },
  date: {
    fontSize: 12,
    color: "#999",
    marginTop: 5,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "#555",
    marginTop: 10,
  },
  shopButton: {
    backgroundColor: "orange",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop: 20,
  },
  shopButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
