import {
  Text as BaseText,
  TextProps as BaseTextProps,
  StyleSheet,
} from "react-native";

type TextProps = {} & BaseTextProps;
export default function Text({ style, ...props }: TextProps) {
  return <BaseText {...props} style={[style, { fontFamily: "Dosis" }]} />;
}
