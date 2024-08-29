import { Palette } from "@/theme";
import { useState } from "react";
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";

type IconButtonProps = {
  style?: StyleProp<ViewStyle>;
} & PressableProps;
export default function IconButton({
  children,
  onPress,
  style,
}: IconButtonProps) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={[isPressed && styles.containerPressed, styles.container, style]}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 8,
  },
  containerPressed: {
    opacity: 0.8,
    backgroundColor: "rgba(211, 211, 211, 0.3)",
  },
});
