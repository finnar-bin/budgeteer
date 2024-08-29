import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome6";

import { Palette } from "@/theme";
import IconButton from "@/components/IconButton";

export default function OverviewLayout() {
  return (
    <Stack
      screenOptions={{
        headerBackground: () => (
          <LinearGradient
            colors={["#6a43ed", "#a13efe"]}
            style={{ flex: 1 }}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
          />
        ),
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontFamily: "Exo2-Bold",
        },
        contentStyle: {
          backgroundColor: Palette.background.main,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Overview",
          headerRight: () => (
            <IconButton style={{ marginRight: -8 }}>
              <FontAwesome
                name="calendar"
                color={Palette.common.white}
                size={24}
              />
            </IconButton>
          ),
        }}
      />
      <Stack.Screen
        name="details"
        options={{
          title: "Details",
          headerBackTitleVisible: false,
        }}
      />
    </Stack>
  );
}
