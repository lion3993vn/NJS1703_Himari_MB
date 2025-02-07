import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import Scan from "react-native-vector-icons/AntDesign";
import Location from "react-native-vector-icons/Entypo";
import TrackingOrder from "react-native-vector-icons/Entypo";
import Logo from "../../assets/img/Logo.png";
import Search from "react-native-vector-icons/AntDesign";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <View style={styles.searchContainer}>
        <Search name="search1" size={22} style={styles.searchIcon} />
        <TextInput placeholder="Tìm kiếm sản phẩm" style={styles.textInput} />
      </View>
      <TouchableOpacity style={styles.iconButton}>
        <Scan name="scan1" size={22} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <Location name="location-pin" size={22} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <TrackingOrder name="box" size={22} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  logo: {
    width: 60, // Adjust the size as needed
    height: 60,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  searchIcon: {
    marginLeft: 10,
  },
  textInput: {
    flex: 1,
    padding: 8,
    paddingLeft: 15,
  },
  iconButton: {
    marginLeft: 10,
  },
});

export default Header;
