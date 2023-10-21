import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import IconTextButton from "../../../components/Buttons/IconTextButton/IconTextButton";
import { useAuth } from "../../../context/AuthContext";
const GetEvents = () => {
  const { onLogout } = useAuth();
  const navigation = useNavigation();
  return (
    <View>
      <IconTextButton
        text="logout"
        onPress={() => {
          onLogout();
        }}
      />
      <Text>Get events</Text>
    </View>
  );
};
export default GetEvents;
