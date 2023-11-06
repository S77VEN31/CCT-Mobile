// React Native
import { StyleSheet } from "react-native";
// Fonts
import { Fonts } from "../../../constants/Fonts";
// Colors
import { Colors } from "../../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 20,
  },
  title: {
    marginTop: 20,
    ...Fonts.textBold,
    ...Fonts.h1,
    color: Colors.secondary,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 20,
  },
  button: {
    flex: 1,
  },
});
