import { useMemo } from "react";
import {
  Text as BaseText,
  TextProps as BaseTextProps,
  StyleSheet,
  TextStyle,
} from "react-native";

const Typography = {
  thin: "Exo2-Thin",
  extraLight: "Exo2-ExtraLight",
  light: "Exo2-Light",
  regular: "Exo2-Regular",
  medium: "Exo2-Medium",
  semiBold: "Exo2-SemiBold",
  bold: "Exo2-Bold",
  extraBold: "Exo2-ExtraBold",
  black: "Exo2-Black",
};

type TextProps = {} & BaseTextProps;
export default function Text({ style, ...props }: TextProps) {
  const weightedFontFamily = useMemo(() => {
    const { fontWeight } = (style as TextStyle) || {};

    switch (fontWeight) {
      case 100:
      case "100":
        return Typography.thin;

      case 200:
      case "200":
        return Typography.extraLight;

      case 300:
      case "300":
        return Typography.light;

      case 400:
      case "400":
        return Typography.regular;

      case 500:
      case "500":
        return Typography.medium;

      case 600:
      case "600":
        return Typography.semiBold;

      case 700:
      case "700":
        return Typography.bold;

      case 800:
      case "800":
        return Typography.extraBold;

      case 900:
      case "900":
        return Typography.black;

      default:
        return Typography.regular;
    }
  }, [style]);

  return (
    <BaseText {...props} style={[style, { fontFamily: weightedFontFamily }]} />
  );
}
