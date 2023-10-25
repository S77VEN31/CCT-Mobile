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
  },
  organizer: {
    color: Colors.primary,
    ...Fonts.textSemiBold,
    ...Fonts.h2,
  },
  eventName: {
    color: Colors.black,
    ...Fonts.textBold,
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
    width: 50,
    height: 50,
    borderRadius: 16,
  },
  dateContainer: {
    display: "flex",
  },
  date: {
    ...Fonts.textRegular,
    ...Fonts.h6,
    color: Colors.primary,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ubicationContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  locationIcon: {
    borderRadius: 50,
    backgroundColor: Colors.secondary,
    color: Colors.white,
    fontSize: 20,
    padding: 8,
  },
  locationText: {
    ...Fonts.textMedium,
    ...Fonts.h5,
  },
});
