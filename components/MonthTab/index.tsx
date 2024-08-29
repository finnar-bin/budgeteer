import { View, FlatList, StyleSheet, Pressable } from "react-native";

import Text from "@/components/Text";
import { Palette } from "@/theme";
import MonthItem from "@/components/MonthTab/MonthItem";
import { useState } from "react";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

type MonthTabProps = {};
export default function MonthTab({}: MonthTabProps) {
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(0);

  return (
    <FlatList
      data={MONTHS}
      keyExtractor={(item, index) => String(index)}
      renderItem={({ item, index }) => (
        <MonthItem
          text={item}
          selected={selectedMonthIndex === index}
          onPress={() => setSelectedMonthIndex(index)}
        />
      )}
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Palette.common.purple,
  },
});
