// React Native
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
// React
import * as React from "react";
// Fonts
import { useFonts } from "@expo-google-fonts/kanit";
import { fonts } from "./assets/fonts/fonts";
// Colors
import { Colors } from "./src/constants/Colors";
// Components
import StackNavigator from "./src/navigation/StackNavigation/StackNavigation";
import { StatusBar } from "expo-status-bar";
import { AuthProvider } from "./src/context/AuthContext";
import { ModalProvider } from "./src/context/ModalContext";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);
  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ModalProvider>
        <AuthProvider>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </AuthProvider>
      </ModalProvider>
      <StatusBar backgroundColor={Colors.secondaryLight} />
    </SafeAreaView>
  );
}
