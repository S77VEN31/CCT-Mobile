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
    gap: 20,
    width: "80%",
    minHeight: "30%",
    borderRadius: 16,
    backgroundColor: Colors.white,
    elevation: 10,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap-reverse",
  },
  title: {
    ...Fonts.h3,
    ...Fonts.textSemiBold,
    textTransform: "uppercase",
  },
  headerIcon: {
    color: Colors.black,
    fontSize: 40,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  contentTitle: {
    ...Fonts.h3,
    ...Fonts.textBold,
    textTransform: "uppercase",
    borderBottomColor: Colors.error,
    borderBottomWidth: 2,
    textAlign: "center",
  },
  codeIconContainer: {
    alignItems: "center",
  },
  contentIcon: {
    color: Colors.error,
    fontSize: 60,
  },
  contentCode: {
    ...Fonts.h3,
    ...Fonts.textBold,
    color: Colors.error,
  },
  successColor: {
    color: Colors.success,
  },
  successLine: {
    borderBottomColor: Colors.success,
  },
});
