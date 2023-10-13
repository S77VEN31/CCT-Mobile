import { View, Text } from "react-native";
import React from "react";
import IconTextButton from "../../../components/Buttons/IconTextButton/IconTextButton";
import { useAuth } from "../../../context/AuthContext";
const Stats = () => {
  const { onLogout } = useAuth();
  return (
    <View>
      <IconTextButton text="logout" onPress={() => onLogout()} />
    </View>
  );
};
export default Stats;
