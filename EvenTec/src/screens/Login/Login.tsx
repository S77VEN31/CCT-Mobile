import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import IconTextButton from "../../components/Buttons/IconTextButton/IconTextButton";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { onLogin, onRegister } = useAuth();
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
    </View>
  );
};

export default Login;
