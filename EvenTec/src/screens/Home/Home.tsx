import React from "react";
import { View, Text } from "react-native";

import { useAuth } from "../../context/AuthContext";

function Home() {
  const { onLogout } = useAuth();
  return (
    <View>
      <Text onPress={() => onLogout()}>Logout</Text>
    </View>
  );
}

export default Home;
