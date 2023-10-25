// React
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
// Auth Context
import { useAuth } from "../../../context/AuthContext";
// Components
import IconTextButton from "../../../components/Buttons/IconTextButton/IconTextButton";

const GetEvents = () => {
  // Navigation
  const navigation = useNavigation();
  // Auth Context
  const { onLogout } = useAuth();

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
