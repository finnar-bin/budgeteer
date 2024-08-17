import { Text, View } from "react-native";
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome6";
import { LinearGradient } from "expo-linear-gradient";

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
        tabBarActiveTintColor: "#6a43ed",
        tabBarInactiveTintColor: "#ababb2",
      }}
      sceneContainerStyle={{
        backgroundColor: "#f6f6f6",
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
