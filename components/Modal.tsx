import {
  ModalBaseProps,
  View,
  Modal as ModalBase,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

import Text from "@/components/Text";
import Card from "@/components/Card";

type ModalProps = {
  children?: React.ReactNode;
  onBackdropPressed: () => void;
} & ModalBaseProps;
export default function Modal({
  children,
  onBackdropPressed,
  ...props
}: ModalProps) {
  return (
    <ModalBase {...props} animationType="fade">
      <TouchableWithoutFeedback onPress={onBackdropPressed}>
        <View style={styles.backdrop}>
          <Card>{children}</Card>
        </View>
      </TouchableWithoutFeedback>
    </ModalBase>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.40)",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
