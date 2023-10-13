// React Native
import { StyleSheet } from "react-native";
// Colors
import { Colors } from "../../../constants/Colors";
// Fonts
import { Fonts } from "../../../constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    minHeight: 200,
    margin: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: Colors.white,
    justifyContent: "space-between",
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 5,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTexts: {
    display: "flex",
    flexDirection: "column",
  },
  name: {
    color: Colors.secondary,
    ...Fonts.textBold,
    ...Fonts.h2,
    textTransform: "uppercase",
  },
  carne: {
    color: Colors.text,
    ...Fonts.textRegular,
    ...Fonts.h3,
  },
  imageContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderColor: Colors.secondary,
    borderWidth: 2,
  },
  descriptionContainer: {
    display: "flex",
  },
  description: {
    ...Fonts.textRegular,
    ...Fonts.h6,
    color: Colors.text,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
