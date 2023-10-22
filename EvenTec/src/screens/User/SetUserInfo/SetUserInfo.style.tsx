// React Native
import { StyleSheet } from "react-native";
// Colors
import { Colors } from "../../../constants/Colors";
// Fonts
import { Fonts } from "../../../constants/Fonts";

export const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
    gap: 16,
  },
  content: {
    paddingHorizontal: 20,
    display: "flex",
    minHeight: 900,
    gap: 32,
    justifyContent: "space-evenly",
  },
  title: {
    ...Fonts.h1,
    ...Fonts.textBold,
    color: Colors.secondary,
    textAlign: "center",
  },
  inputs: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  button: {
    elevation: 8,
  },
  confirmButton: {
    elevation: 8,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
  },
});
