// React Native
import { StyleSheet } from "react-native";
// Colors
import { Colors } from "../../../constants/Colors";
// Fonts
import { Fonts } from "../../../constants/Fonts";

export const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    height: "100%",
    width: "100%",
    position: "absolute",
    justifyContent: "flex-end",
  },
  barContainer: {
    display: "flex",
    flexGrow: 1,
    overflow: "hidden",
    flexDirection: "row",
    minHeight: 65,
    alignItems: "center",
    borderRadius: 8,
    margin: 10,
    zIndex: 2,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 4,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    backgroundColor: Colors.secondary,
  },
  button: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    ...Fonts.textLight,
  },
  buttonInactive: {
    color: Colors.backgroundDark,
  },
  buttonActive: {
    color: Colors.primary,
    textShadowColor: Colors.black,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});
