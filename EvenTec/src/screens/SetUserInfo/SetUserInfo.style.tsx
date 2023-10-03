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
    minHeight: 1100,
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
  setImageContainer: {
    display: "flex",
    gap: 32,
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
  },
  imageButton: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  image: {
    backgroundColor: Colors.white,
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});
