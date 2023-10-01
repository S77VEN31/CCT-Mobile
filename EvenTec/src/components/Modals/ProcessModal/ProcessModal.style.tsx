// React Native
import { StyleSheet } from "react-native";
// Colors
import { Colors } from "../../../constants/Colors";
// Fonts
import { Fonts } from "../../../constants/Fonts";

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
    width: "80%",
    height: "40%",
    borderRadius: 16,
    backgroundColor: Colors.white,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
