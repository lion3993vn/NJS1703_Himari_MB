import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { consultData } from "../components/data/consultData";

export const ConsultScreen = () => {
  // Nhóm dữ liệu theo category
  const groupedData = consultData.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <View style={styles.container}>
      <Text style={styles.header}>HimaBot - Tư Vấn</Text>

      <FlatList
        data={Object.keys(groupedData)}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.category}>{item}</Text>
            {groupedData[item].map((consult) => (
              <View key={consult.id} style={styles.item}>
                <Text style={styles.message}>{consult.message}</Text>
                <Text style={styles.time}>{consult.time}</Text>
              </View>
            ))}
          </View>
        )}
      />

      {/* Nút Tư Vấn Mới */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>+ Tư Vấn Mới</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#D6336C",
    marginBottom: 16,
  },
  category: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#D6336C",
    marginTop: 10,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#F8D7DA",
    marginTop: 5,
    borderRadius: 8,
  },
  message: {
    fontSize: 14,
    color: "#333",
  },
  time: {
    fontSize: 14,
    color: "#666",
  },
  button: {
    backgroundColor: "#FF86A5",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
