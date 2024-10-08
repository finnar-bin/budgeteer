import { Text, View, Button, Pressable } from "react-native";
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome6";
import { LinearGradient } from "expo-linear-gradient";

import { Palette } from "@/theme";
import IconButton from "@/components/IconButton";

export default function TabsLayout() {
  return (
    <Tabs
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
        tabBarActiveTintColor: Palette.common.purple,
        tabBarInactiveTintColor: Palette.text.secondary,
        tabBarLabelStyle: {
          fontFamily: "Exo2-SemiBold",
        },
      }}
      sceneContainerStyle={{
        backgroundColor: Palette.background.main,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="house-user" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="overview"
        options={{
          title: "Overview",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="chart-gantt" color={color} size={24} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="compare"
        options={{
          title: "Compare",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="object-group" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="sliders" color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
