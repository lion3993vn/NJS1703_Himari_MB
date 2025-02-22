import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PaymentHeader from "../components/payment/PaymentHeader";
import UserInfo from "../components/payment/UserInfo";
import ProductList from "../components/payment/ProductList";
import PaymentMethods from "../components/payment/PaymentMethods";
import PaymentSummary from "../components/payment/PaymentSummary";
import CheckoutButton from "../components/payment/CheckoutButton";
import { cartItems } from "../components/cart/cartData ";

const PaymentScreen = ({ navigation }) => {
  const userInfo = {
    name: "Pham Hieu",
    phone: "0974752607",
    address: "Can Giuoc, Long An, Viet Nam",
  };

  // Tính tổng tiền
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shippingFee = 23000;
  const total = subtotal + shippingFee;

  const handleCheckout = () => {
    // Xử lý logic đặt hàng
  };

  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={{ flex: 1, backgroundColor: "#FFC0CB" }}
    >
      <View className="flex-1 bg-white">
        <View className="bg-[#FFC0CB]">
            <PaymentHeader navigation={navigation} />
          </View>
        <ScrollView>
          
          <View className="bg-white">
            <UserInfo userInfo={userInfo} />
          </View>

          {/* Phần danh sách sản phẩm */}
          <View className="bg-white border-t border-gray-200">
            <ProductList items={cartItems} />
          </View>

          {/* Phần phương thức thanh toán */}
          <View className="border-t border-gray-200 mt-2">
            <PaymentMethods />
          </View>

          {/* Phần tổng tiền */}
          <View className="border-t border-gray-200 mt-2">
            <PaymentSummary
              subtotal={subtotal}
              shippingFee={shippingFee}
              total={total}
            />
          </View>
        </ScrollView>

        {/* Nút đặt hàng */}
        <View className="border-t border-gray-200">
          <CheckoutButton total={total} onPress={handleCheckout} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PaymentScreen;
