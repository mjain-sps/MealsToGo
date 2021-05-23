import React from "react";
import { ThemeProvider } from "styled-components/native";
//importing the screens
import { RestaurantScreens } from "./src/Features/Restaurants/Screens/restaurants";
//importing the theme
import { theme } from "./src/Infrastructure/theme";
import {
  useFonts as oswaldFonts,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as latoFonts,
  Lato_400Regular,
} from "@expo-google-fonts/lato";
export default function App() {
  let [oswaldLoaded] = oswaldFonts({ Oswald_400Regular });
  let [latoLoaded] = latoFonts({ Lato_400Regular });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreens />
      </ThemeProvider>
    </>
  );
}
