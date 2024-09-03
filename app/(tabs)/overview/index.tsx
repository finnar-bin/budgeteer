import { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome6";

import Text from "@/components/Text";
import MonthTab from "@/components/MonthTab";
import IconButton from "@/components/IconButton";
import Modal from "@/components/Modal";
import { Palette } from "@/theme";

const TYPES = ["expense", "income"] as const;

export default function Overview() {
  const navigation = useNavigation();
  const [isYearModalOpen, setIsYearModalOpen] = useState(false);
  const [activeType, setActiveType] =
    useState<(typeof TYPES)[number]>("expense");

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
      <View style={styles.container}>
        <View style={styles.buttonGroupContainer}>
          {TYPES.map((type) => (
            <Pressable
              style={[
                styles.buttonGroupBtn,
                activeType === type && { backgroundColor: Palette.common.blue },
              ]}
              onPress={() => setActiveType(type)}
            >
              <Text
                style={{
                  ...styles.buttonGroupBtnText,
                  ...(activeType === type && { color: Palette.common.white }),
                }}
              >
                {type.toUpperCase()}
              </Text>
            </Pressable>
          ))}
        </View>
        <Text>Overview Index screen</Text>
        <Link href="/overview/details">Details page</Link>
      </View>
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

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 24,
  },
  buttonGroupContainer: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Palette.common.blue,
    borderRadius: 8,
  },
  buttonGroupBtn: {
    flex: 1,
    padding: 8,
    display: "flex",
    alignItems: "center",
    borderColor: Palette.background.main,
    borderWidth: 2,
    borderRadius: 8,
  },
  buttonGroupBtnText: {
    fontSize: 16,
    fontWeight: 600,
    color: Palette.common.blue,
  },
});
