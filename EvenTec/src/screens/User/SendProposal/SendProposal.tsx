import React from "react";
import { View } from "react-native";
import IconTextButton from "../../../components/Buttons/IconTextButton/IconTextButton";
import { useAuth } from "../../../context/AuthContext";
const SendProposal = () => {
  const { onLogout } = useAuth();
  return (
    <View>
      <IconTextButton text="logout" onPress={() => onLogout()} />
    </View>
  );
};
export default SendProposal;
