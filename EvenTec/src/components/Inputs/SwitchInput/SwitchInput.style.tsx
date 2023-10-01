// React Native
import { StyleSheet } from "react-native";
// Colors
import { Colors } from "../../../constants/Colors";
// Fonts
import { Fonts } from "../../../constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    ...Fonts.h5,
    ...Fonts.textSemiBold,
    color: Colors.secondary,
    textTransform: "uppercase",
  },
  trackActive: {
    backgroundColor: Colors.secondaryLight,
  },
  trackInactive: {
    backgroundColor: Colors.transparentBackground,
  },
  thumbActive: {
    backgroundColor: Colors.secondary,
  },
  thumbInactive: {
    backgroundColor: Colors.white,
  },
});
