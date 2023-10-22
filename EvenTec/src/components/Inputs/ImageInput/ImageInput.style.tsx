// React Native
import { StyleSheet } from "react-native";
// Colors
import { Colors } from "../../../constants/Colors";

export const styles = StyleSheet.create({
  button: {
    elevation: 8,
  },
  setImageContainer: {
    display: "flex",
    gap: 32,
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
  },
  imageButton: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  image: {
    backgroundColor: Colors.white,
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});
