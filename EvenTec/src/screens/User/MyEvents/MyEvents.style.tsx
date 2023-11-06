// React Native
import { StyleSheet } from "react-native";
// Colors
import { Colors } from "../../../constants/Colors";
// Fonts
import { Fonts } from "../../../constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    paddingTop: 20,
  },
  pendingTitle: {
    ...Fonts.textBold,
    ...Fonts.h1,
    color: Colors.secondary,
    textAlign: "center",
  },
  eventsTitle: {
    ...Fonts.textBold,
    ...Fonts.h1,
    color: Colors.secondary,
    textAlign: "center",
  },
  addEvent: {
    display: "flex",
    gap: 16,
    padding: 20,
  },
  eventsContainer: {
    display: "flex",
    paddingBottom: 80,
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
});
