// React Native
import { StyleSheet } from "react-native";
// Colors
import { Colors } from "../../../constants/Colors";
// Fonts
import { Fonts } from "../../../constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    minHeight: 50,
    gap: 10,
    padding: 10,
    borderRadius: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: Colors.secondary,
  },
  text: {
    color: Colors.white,
    ...Fonts.h5,
    ...Fonts.textMedium,
  },
  icon: {
    color: Colors.white,
  },
});
