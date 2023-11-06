// Stylesheets
import { StyleSheet } from "react-native";
// Colors
import { Colors } from "../../../constants/Colors";
// Fonts
import { Fonts } from "../../../constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 16,
  },
  rateTitle: {
    marginTop: 20,
    ...Fonts.textBold,
    ...Fonts.h1,
    color: Colors.secondary,
    textAlign: "center",
  },
  rateContainer: {
    padding: 20,
    borderRadius: 16,
    elevation: 8,
    backgroundColor: Colors.white,
  },
});
