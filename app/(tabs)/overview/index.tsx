import { View, FlatList } from "react-native";
import { Link } from "expo-router";

import Text from "@/components/Text";
import MonthTab from "@/components/MonthTab";

export default function Overview() {
  return (
    <View>
      <MonthTab />
      <Text>Overview Index screen</Text>
      <Link href="/overview/details">Details page</Link>
    </View>
  );
}
