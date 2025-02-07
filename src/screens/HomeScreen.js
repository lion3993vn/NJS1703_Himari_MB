import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Detail"
        onPress={() => navigation.navigate("Detail")}
      />
    </View>
  );
}
