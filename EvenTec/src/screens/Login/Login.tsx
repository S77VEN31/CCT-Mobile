import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import IconTextButton from "../../components/Buttons/IconTextButton/IconTextButton";
import { useNavigation } from "@react-navigation/native";
const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { onLogin, onRegister } = useAuth();
  const navigation = useNavigation();
  return (
    <View>
      <Text>Email</Text>
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
      />
      <Text>Password</Text>
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
      />
      <IconTextButton text="Login" onPress={() => onLogin(email, password)} />
      <IconTextButton
        text="GO"
        onPress={() => {
          navigation.navigate("TabNavigation" as never);
        }}
      />
    </View>
  );
};

export default Login;
