// React Native
import { StyleSheet } from "react-native";
// Colors
import { Colors } from "../../constants/Colors";
// Fonts
import { Fonts } from "../../constants/Fonts";

export const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flex: 1,
    backgroundColor: "transparent",
  },
  mainHeader: {
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 10,
    overflow: "hidden",
    paddingTop: 10,
    backgroundColor: Colors.secondary,
    flex: 1,
    zIndex: 2,
    maxHeight: 120,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 4,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
  },
  mainTitleContent: {
    display: "flex",
    flexDirection: "row",
    zIndex: 2,
    flex: 0.8,
    gap: 10,
  },
  mainTitle: {
    textTransform: "uppercase",
    borderRadius: 16,
    backgroundColor: Colors.backgroundDark,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 4,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flex: 1,
    flexDirection: "row",
    textAlignVertical: "center",
    textShadowColor: Colors.black,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    ...Fonts.concertOneTitle,
    color: Colors.primary,
    textAlign: "center",
  },
  carrouselContainer: {
    display: "flex",
    overflow: "hidden",
    backgroundColor: Colors.backgroundDark,
    flex: 1,
  },
  carrousel: {
    marginTop: "35%",
    overflow: "visible",
  },
  menuNull: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  menuNullText: {
    ...Fonts.concertOneTitle,
    textAlign: "center",
    color: Colors.secondary,
    padding: 40,
    textShadowColor: Colors.black,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    marginBottom: 75,
  },
  goBackButton: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 16,
    alignSelf: "center",
    padding: 10,
    borderRadius: 16,
    backgroundColor: Colors.backgroundDark,
  },
  goBackIcon: {
    fontSize: 30,
    textShadowColor: Colors.black,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    color: Colors.primary,
  },
});
