// React
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
// Styles
import { styles } from "./HandleEvents.style";
// Components
import IconTextButton from "../../../components/Buttons/IconTextButton/IconTextButton";

const HandleEvents = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <IconTextButton
        text="Agregar Evento"
        onPress={() => {
          navigation.navigate("CreateEvent" as never);
        }}
      />
    </View>
  );
};
export default HandleEvents;
