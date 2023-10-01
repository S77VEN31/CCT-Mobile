// React Native
import { StyleSheet } from "react-native";
// Colors
import { Colors } from "../../../constants/Colors";
// Fonts
import { Fonts } from "../../../constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 16,
    gap: 8,
  },
  label: {
    paddingLeft: 8,
    ...Fonts.h4,
    ...Fonts.textSemiBold,
    color: Colors.secondary,
  },
  input: {
    ...Fonts.h5,
    ...Fonts.textMedium,
    color: Colors.black,
    backgroundColor: Colors.secondaryLight,
    padding: 8,
    borderRadius: 8,
    borderColor: Colors.secondary,
  },
});
