// React Native
import { StyleSheet } from "react-native";
// Colors
import { Colors } from "../../../constants/Colors";
// Fonts
import { Fonts } from "../../../constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    borderRadius: 16,
    gap: 16,
    padding: 20,
    backgroundColor: Colors.white,
    elevation: 8,
  },
  title: {
    ...Fonts.h4,
    ...Fonts.textSemiBold,
    color: Colors.secondary,
  },
  inputsContainer: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 16,
    overflow: "hidden",
    elevation: 8,
    backgroundColor: Colors.white,
  },
  button: {
    display: "flex",
    justifyContent: "center",
    width: 50,
    height: 50,
    backgroundColor: Colors.secondary,
    color: Colors.white,
  },
  buttonText: {
    textAlign: "center",
    color: Colors.white,
    ...Fonts.h4,
    ...Fonts.textSemiBold,
  },
  textInput: {
    backgroundColor: Colors.secondaryLight,
    textAlign: "center",
    flex: 1,
  },
});
