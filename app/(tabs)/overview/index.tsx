import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Overview() {
  return (
    <View>
      <Text>Overview Index screen</Text>
      <Link href="/overview/details">Details page</Link>
    </View>
  );
}
