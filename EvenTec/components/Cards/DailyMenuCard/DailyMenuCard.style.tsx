// React Native
import { StyleSheet } from "react-native";
// Colors
import { Colors } from "../../../constants/Colors";
import { Fonts } from "../../../constants/Fonts";

export const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    minHeight: 50,
    backgroundColor: "white",
    borderRadius: 15,
    borderColor: "black",
    overflow: "hidden",
    shadowColor: Colors.black,
    shadowOffset: {
      width: 4,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
  },
  infoContainer: {
    margin: 20,
    display: "flex",
    borderRadius: 15,
    backgroundColor: Colors.backgroundLight,
    padding: 20,
  },
  menusPrices: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  titlesInfo: {
    display: "flex",
    gap: 10,
  },
  titlesText: {
    ...Fonts.textBold,
    textAlign: "center",
  },
  menusText: {
    ...Fonts.textMedium,
    textAlign: "center",
  },
  pricesText: {
    ...Fonts.textRegular,
    textAlign: "center",
  },
  textContainer: {
    gap: 2.5,
  },
});
