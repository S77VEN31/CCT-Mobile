// React Native
import { StyleSheet } from "react-native";
// Fonts
import { Fonts } from "../../../constants/Fonts";
// Colors
import { Colors } from "../../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  proposalsTitle: {
    marginTop: 20,
    ...Fonts.textBold,
    ...Fonts.h1,
    color: Colors.secondary,
    textAlign: "center",
  },
  noContent: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  noContentText: {
    color: Colors.secondary,
    ...Fonts.textBold,
    ...Fonts.h2,
    textAlign: "center",
  },
  proposalsContainer: {
    display: "flex",
    flex: 1,
    paddingBottom: 80,
  },
});
