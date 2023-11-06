// React Native
import { StyleSheet } from "react-native";
// Colors
import { Colors } from "../../../constants/Colors";
// Fonts
import { Fonts } from "../../../constants/Fonts";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
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
    flexDirection: "row",
    gap: 8,
  },
  headerTexts: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  title: {
    color: Colors.secondary,
    ...Fonts.textBold,
    ...Fonts.h2,
    flexWrap: "wrap",
    textTransform: "uppercase",
  },
  subtitle: {
    color: Colors.secondary,
    textTransform: "uppercase",
    ...Fonts.textSemiBold,
    ...Fonts.h4,
  },
  content: {
    color: Colors.text,
    ...Fonts.textRegular,
    ...Fonts.h5,
  },
  imageContainer: {
    display: "flex",
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
    backgroundColor: Colors.secondaryLight,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  description: {
    ...Fonts.textRegular,
    ...Fonts.h6,
    textAlign: "justify",
    color: Colors.text,
  },
});
