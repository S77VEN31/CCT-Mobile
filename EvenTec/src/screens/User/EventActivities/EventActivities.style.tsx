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
  },
  activitiesContainer: {
    display: "flex",
  },
  activitiesTitle: {
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
  buttonContainer: {
    padding: 20,
  },
});
