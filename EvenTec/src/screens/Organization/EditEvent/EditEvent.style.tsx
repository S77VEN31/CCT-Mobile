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
    padding: 20,
    display: "flex",
    flex: 1,
    minHeight: 1450,
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
  dateTimeTitle: {
    ...Fonts.h4,
    ...Fonts.textSemiBold,
    color: Colors.secondary,
  },
  dateTime: {
    ...Fonts.h5,
    ...Fonts.textMedium,
    color: Colors.black,
  },
  dateTimeContainer: {
    display: "flex",
    backgroundColor: Colors.white,
    justifyContent: "space-between",
    gap: 16,
    padding: 20,
    elevation: 8,
    borderRadius: 16,
  },
  categoryContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: 16,
    padding: 20,
    backgroundColor: Colors.white,
    elevation: 8,
    borderRadius: 16,
  },
});
