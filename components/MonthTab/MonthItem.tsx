import { Pressable, StyleSheet, View } from "react-native";

import Text from "@/components/Text";
import { Palette } from "@/theme";

type MonthItemProps = {
  text: string;
  onPress: () => void;
  selected: boolean;
};
export default function MonthItem({ text, onPress, selected }: MonthItemProps) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.pressable} onPress={onPress}>
        <Text style={{ ...styles.text, fontWeight: selected ? 600 : 300 }}>
          {text}
        </Text>
      </Pressable>
      <View style={selected ? styles.selected : styles.unselected} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  pressable: {
    paddingTop: 8,
    paddingBottom: 20,
    paddingLeft: 8,
    paddingRight: 8,
  },
  text: {
    fontSize: 17,
    color: Palette.common.white,
  },
  selected: {
    height: 3,
    width: "100%",
    borderBottomWidth: 3,
    borderColor: Palette.background.main,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  unselected: {
    height: 3,
    width: "100%",
    borderBottomWidth: 3,
    borderColor: Palette.common.purple,
  },
});
