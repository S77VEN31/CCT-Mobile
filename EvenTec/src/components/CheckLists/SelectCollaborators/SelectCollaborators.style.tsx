// Stylesheets
import { StyleSheet } from "react-native";
// Colors
import { Colors } from "../../../constants/Colors";

export const styles = StyleSheet.create({
  collaboratorItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  collaboratorText: {
    flex: 1,
  },
  collaboratorsList: {
    backgroundColor: Colors.white,
    elevation: 8,
    borderRadius: 16,
  },
  checkboxSelected: {
    color: Colors.secondary,
  },
});
