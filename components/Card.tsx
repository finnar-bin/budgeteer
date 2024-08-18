import { ReactNode } from "react";
import { View, StyleSheet } from "react-native";

type CardProps = {
  children?: ReactNode;
};
export default function Card({ children }: CardProps) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
  },
});
