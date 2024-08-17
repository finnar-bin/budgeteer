import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome6";

export default function TabsLayout() {
  return (
    <Tabs>
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
