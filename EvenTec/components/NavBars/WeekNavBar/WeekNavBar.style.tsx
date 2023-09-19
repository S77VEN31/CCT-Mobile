// React Native
import { StyleSheet } from "react-native";
// Colors
import { Colors } from "../../../constants/Colors";
// Fonts
import { Fonts } from "../../../constants/Fonts";

export const styles = StyleSheet.create({
  barContainer: {
    zIndex: 1,
    display: "flex",
    overflow: "hidden",
    flexDirection: "row",
    backgroundColor: Colors.secondary,
    flex: 1,
  },
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  text: {
    textAlign: "center",
    textAlignVertical: "center",
    overflow: "visible",
    display: "flex",
    textShadowColor: Colors.black,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    ...Fonts.textBold,
    textTransform: "uppercase",
    color: Colors.backgroundDark,
  },
  currentDayText: {
    height: 45,
    width: 45,
    borderRadius: 50,
    backgroundColor: Colors.backgroundDark,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 4,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    color: Colors.primary,
  },
  currentDayDot: {
    height: 5,
    width: 25,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    position: "absolute",
    top: 45,
  },
});
