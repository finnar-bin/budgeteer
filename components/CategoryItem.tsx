import { View, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome6";

import Text from "@/components/Text";
import { CategoryItemTransaction } from "@/types";
import { toPhp } from "@/utils";

type CategoryItemProps = {
  item: CategoryItemTransaction;
};
export default function CategoryItem({ item }: CategoryItemProps) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.leftContainer}>
        <View style={[styles.iconContainer, { backgroundColor: item?.color }]}>
          <FontAwesome name={item?.icon} size={24} color="#fff" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item?.name}</Text>
          <Text style={styles.transactions}>
            {item?.transactions} transactions
          </Text>
        </View>
      </View>
      <Text>{toPhp(item?.amount)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    height: 48,
    borderRadius: 16,
  },
  textContainer: {
    display: "flex",
    justifyContent: "center",
  },
  name: {
    fontWeight: 700,
  },
  transactions: {
    color: "#ababb2",
    fontWeight: "thin",
  },
});
