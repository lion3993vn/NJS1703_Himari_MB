import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { cartItems } from "../components/cart/cartItems ";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const CartScreen = () => {
  const [cart, setCart] = useState(cartItems);

  // Tính tổng tiền
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Giỏ hàng</Text>
        <View style={{ width: 30 }} />
      </View>

      {/* Danh sách sản phẩm */}
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.brandText}>{item.brand}</Text>
              <Text style={styles.productName}>{item.name}</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity>
                  <Icon name="minus" size={22} color="#000" />
                </TouchableOpacity>
                <Text style={styles.quantityText}>{item.quantity}</Text>
                <TouchableOpacity>
                  <Icon name="plus" size={22} color="#000" />
                </TouchableOpacity>
                <Text style={styles.priceText}>
                  {item.price.toLocaleString()} đ
                </Text>
              </View>
            </View>
            <TouchableOpacity>
              <Icon name="close" size={20} color="gray" />
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Tổng thanh toán */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Tổng Thanh Toán</Text>
        <Text style={styles.totalAmount}>{totalAmount.toLocaleString()} đ</Text>
      </View>

      {/* Nút đặt hàng */}
      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderButtonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#F9F9F9",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  cartItem: {
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    alignItems: "center",
  },
  productImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  brandText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FF6600",
  },
  productName: {
    fontSize: 14,
    color: "#333",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  priceText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#F5F5F5",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  totalText: {
    fontSize: 16,
    color: "#666",
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF6600",
  },
  orderButton: {
    backgroundColor: "#FFCC99",
    padding: 15,
    alignItems: "center",
    margin: 15,
    borderRadius: 5,
  },
  orderButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});

export default CartScreen;
