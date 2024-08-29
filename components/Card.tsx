import { ReactNode } from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";

import { Palette } from "@/theme";

type CardProps = {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
};
export default function Card({ style, children }: CardProps) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Palette.background.paper,
    padding: 16,
    borderRadius: 16,
  },
});
