import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect } from "react";

import { CategoryProvider } from "@/contexts/CategoryProvider";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

SplashScreen.preventAutoHideAsync();

export default function AppLayout() {
  const [fontsLoaded, fontsLoadError] = useFonts({
    "Exo2-Black": require("../assets/fonts/Exo2-Black.ttf"),
    "Exo2-Bold": require("../assets/fonts/Exo2-Bold.ttf"),
    "Exo2-ExtraBold": require("../assets/fonts/Exo2-ExtraBold.ttf"),
    "Exo2-ExtraLight": require("../assets/fonts/Exo2-ExtraLight.ttf"),
    "Exo2-Light": require("../assets/fonts/Exo2-Light.ttf"),
    "Exo2-Medium": require("../assets/fonts/Exo2-Medium.ttf"),
    "Exo2-Regular": require("../assets/fonts/Exo2-Regular.ttf"),
    "Exo2-SemiBold": require("../assets/fonts/Exo2-SemiBold.ttf"),
    "Exo2-Thin": require("../assets/fonts/Exo2-Thin.ttf"),
  });

  useEffect(() => {
    if (fontsLoadError) {
      throw fontsLoadError;
    }
  }, [fontsLoadError]);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return (
    <CategoryProvider>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="modal"
          options={{
            presentation: "modal",
          }}
        />
      </Stack>
    </CategoryProvider>
  );
}
