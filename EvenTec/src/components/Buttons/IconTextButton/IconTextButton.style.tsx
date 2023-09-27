// React Native
import { StyleSheet } from "react-native";
// Colors
import { Colors } from "../../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    minHeight: 50,
    gap: 10,
    padding: 10,
    borderRadius: 16,
    minWidth: 125,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: Colors.secondary,
  },
  text: {
    color: Colors.white,
    fontWeight: "bold",
  },
  icon: {
    color: Colors.white,
  },
});
