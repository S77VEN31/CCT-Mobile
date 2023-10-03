// React Native
import { StyleSheet } from "react-native";
// Colors
import { Colors } from "../../constants/Colors";
// Fonts
import { Fonts } from "../../constants/Fonts";



export const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  content: {
    padding: 20,
    display: "flex",
    flex: 1,
    minHeight: 600,
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
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 16,
  },
  button: {
    minWidth: 125,
    elevation: 8,
  },
});