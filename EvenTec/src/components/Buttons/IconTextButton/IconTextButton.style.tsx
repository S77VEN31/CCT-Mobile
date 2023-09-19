// React Native
import { StyleSheet } from "react-native";
// Colors
import { Colors } from "../../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    height: 50,
    gap: 10,

    padding: 10,
    borderRadius: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
