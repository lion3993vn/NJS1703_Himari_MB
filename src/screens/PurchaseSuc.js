import React from "react";
import { SafeAreaView, View, Platform } from "react-native";
import PaymentHeader from "../components/paymentsuc/PaymentSucHeader";
import PaymentContent from "../components/paymentsuc/PaymentSucContent";
import PaymentButton from "../components/paymentsuc/PaymentSucButton";

const PaymentSuccessScreen = ({ route }) => {
  const { orderCode, transactionId } = route.params || {};

  return (
    <SafeAreaView 
      edges={["top", "left", "right"]} 
      style={{ 
        flex: 1, 
        backgroundColor: "#FFC0CB",
        paddingTop: Platform.OS === 'android' ? 25 : 0
      }}
    >
      <View className="flex-1 bg-white">
        <PaymentHeader />
        <PaymentContent orderCode={orderCode} transactionId={transactionId} />
        <PaymentButton  />
      </View>
    </SafeAreaView>
  );
};

export default PaymentSuccessScreen;
