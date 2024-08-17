import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Details() {
  return (
    <View>
      <Text>Overview details screen</Text>
      <Link href="/overview">Index page</Link>
    </View>
  );
}
