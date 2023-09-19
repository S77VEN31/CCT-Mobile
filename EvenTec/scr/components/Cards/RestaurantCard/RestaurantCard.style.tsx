// React Native
import { StyleSheet } from "react-native";
// Colors
import { Colors } from "../../../constants/Colors";
// Fonts
import { Fonts } from "../../../constants/Fonts";

export const styles = StyleSheet.create({
  mainContainer: {
    gap: 20,
    borderRadius: 20,
    backgroundColor: Colors.white,
    padding: 20,
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: Colors.black,
    shadowOffset: {
      width: 4,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
  },
  carousel: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 4,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
  },
  map: {
    backgroundColor: Colors.white,

    shadowColor: Colors.black,
    shadowOffset: {
      width: 4,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
  },
  carouselImage: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flex: 1,
    flexDirection: "row",
  },
  restaurantData: {
    flexWrap: "wrap",
    gap: 10,
    display: "flex",
    maxWidth: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  restaurantInfo: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
    flex: 1,
  },
  restaurantName: {
    fontSize: 24,
    ...Fonts.concertOneTitle,
    color: Colors.secondary,
  },
  open: {
    color: Colors.success,
  },
  closed: {
    color: Colors.error,
  },
  buttonsContainer: {
    display: "flex",
    gap: 10,
  },
  button: {
    backgroundColor: Colors.secondary,
    padding: 10,
    borderRadius: 50,
    color: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 4,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonText: {
    fontSize: 24,
    color: Colors.white,
  },
});
