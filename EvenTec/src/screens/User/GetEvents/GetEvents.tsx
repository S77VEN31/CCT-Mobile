import { View, Text } from "react-native";
import React from "react";
import { useAuth } from "../../../context/AuthContext";
import IconTextButton from "../../../components/Buttons/IconTextButton/IconTextButton";
const GetEvents = () => {
  const { onLogout } = useAuth();
  return (
    <View>
      <IconTextButton text="logout" onPress={() => onLogout()} />
      <Text>Get events</Text>
    </View>
  );
};
export default GetEvents;
