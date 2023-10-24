// React Native
import { StyleSheet } from "react-native";
// Colors
import { Colors } from "../../../constants/Colors";
// Fonts

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: Colors.transparentBackground,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  modal: {
    display: "flex",
    padding: 16,
    gap: 20,
    width: "80%",
    minHeight: "45%",
    height: "auto",
    borderRadius: 16,
    backgroundColor: Colors.white,
    elevation: 10,
  },
  headerIcon: {
    color: Colors.black,
    fontSize: 40,
  },
});
