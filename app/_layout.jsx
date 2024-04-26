import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Slot, Stack, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";

// prevnt the splash screen from hiding on its own until we explicitly called the hideAsync() on it.
SplashScreen.preventAutoHideAsync()


export default function RootLayout() {
  // laoding the fonts required....
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  // checking effects on the screen
  // splashScrenn --  explicitly telling the screen to remain visible until it has been explicitly told to hide.

  useEffect(() => {
    if (error) {
      throw error;
    }
    if (fontsLoaded) {
      // hiding the splash screen on the fonts loaded success.
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded && error) {
    return null;
  }

  return (
    // Stack can have multiple screens
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      {/* to crete a profile route */}
    </Stack>
  );
}
