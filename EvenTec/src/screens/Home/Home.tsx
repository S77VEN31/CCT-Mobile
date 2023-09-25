// React
import React from "react";
// React Native
import { View, Text } from "react-native";
// AuthContext
import { useAuth } from "../../context/AuthContext";
// Api Call
import axios from "axios";
// Components
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
