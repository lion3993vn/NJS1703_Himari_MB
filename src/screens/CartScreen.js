import React, { useState } from "react";
import { View, ScrollView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { cartItems } from "../components/cart/cartData ";
import CartHeader from "../components/cart/CartHeader";
import CartItem from "../components/cart/CartItem";
import CartFooter from "../components/cart/CartFooter";

const CartScreen = () => {
  const [cart, setCart] = useState(cartItems);

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <SafeAreaView 
      edges={["top", "left", "right"]} 
      style={{ 
        flex: 1, 
        backgroundColor: "#FFC0CB",
        paddingTop: Platform.OS === 'android' ? 25 : 0 
      }}
    >
      <View className="flex-1 bg-gray-100">
        <CartHeader />
        
        <ScrollView className="flex-1">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ScrollView>

        <CartFooter totalAmount={totalAmount} itemCount={cart.length} />
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
