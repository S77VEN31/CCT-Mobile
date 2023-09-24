import React from "react";
import { View, Text } from "react-native";

import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import IconTextButton from "../../components/Buttons/IconTextButton/IconTextButton";
function Home() {
  const { onLogout } = useAuth();
  const profile = async () => {
    try {
      const profile = await axios.get(
        "https://campustecgatoapi-ccf0e8a36684.herokuapp.com/api/profile"
      );
      console.log(JSON.stringify(profile));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <IconTextButton
        text="Profile"
        onPress={() => {
          profile();
        }}
      ></IconTextButton>
      <Text onPress={() => onLogout()}>Logout</Text>
    </View>
  );
}

export default Home;
