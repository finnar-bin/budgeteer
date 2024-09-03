import { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Link } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome6";

import Text from "@/components/Text";
import MonthTab from "@/components/MonthTab";
import IconButton from "@/components/IconButton";
import Modal from "@/components/Modal";
import { Palette } from "@/theme";

export default function Overview() {
  const navigation = useNavigation();
  const [isYearModalOpen, setIsYearModalOpen] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          style={{ marginRight: -8 }}
          onPress={() => setIsYearModalOpen(true)}
        >
          <FontAwesome name="calendar" color={Palette.common.white} size={24} />
        </IconButton>
      ),
    });
  }, []);

  return (
    <View>
      <MonthTab />
      <Text>Overview Index screen</Text>
      <Link href="/overview/details">Details page</Link>
      <Modal
        transparent
        visible={isYearModalOpen}
        onRequestClose={() => setIsYearModalOpen(false)}
        onBackdropPressed={() => setIsYearModalOpen(false)}
      >
        <Text>Select year</Text>
      </Modal>
    </View>
  );
}
