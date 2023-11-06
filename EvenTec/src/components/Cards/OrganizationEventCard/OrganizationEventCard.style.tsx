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
    gap: 16,
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
    alignItems: "center",
    flex: 1,
  },
  title: {
    color: Colors.secondary,
    ...Fonts.textSemiBold,
    ...Fonts.h2,
  },

  imageContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 16,
  },
  dateContainer: {
    display: "flex",
  },
  dateLabel: {
    ...Fonts.textMedium,
    ...Fonts.h5,
    color: Colors.black,
    marginRight: 5,
  },
  date: {
    ...Fonts.textRegular,
    ...Fonts.h6,
    color: Colors.secondary,
  },
  footer: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  iconTextContainer: {
    display: "flex",
    alignItems: "center",
    gap: 5,
  },
  icon: {
    borderRadius: 50,
    backgroundColor: Colors.secondary,
    color: Colors.white,
    fontSize: 20,
    padding: 8,
  },
  iconText: {
    ...Fonts.textMedium,
    ...Fonts.h5,
  },
  footerDivision: {
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 2,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 10,
  },
  button: {
    flex: 1,
  },
  descriptionContainer: {
    display: "flex",
    backgroundColor: Colors.secondaryLight,
    padding: 10,
    borderRadius: 10,
  },
  description: {
    ...Fonts.textRegular,
    ...Fonts.h6,
    textAlign: "justify",
    color: Colors.text,
  },
});
