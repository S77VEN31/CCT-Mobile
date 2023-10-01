// React
import { useState } from "react";
import { View, Text, ScrollView, KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
// Styles
import { styles } from "./Login.style";
// Auth Context
import { useAuth } from "../../context/AuthContext";
// Components
import TextInput from "../../components/Inputs/TextInput/TextInput";
import IconTextButton from "../../components/Buttons/IconTextButton/IconTextButton";

const Login = () => {
  // Inputs states
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // Auth Context
  const { onLogin } = useAuth();
  // Navigation
  const navigation = useNavigation();
  // Inputs props
  const inputs = [
    {
      title: "Correo",
      value: email,
      onChangeText: (text: string) => setEmail(text),
      placeholder: "estudiante@estudiantec.cr",
    },
    {
      title: "Contraseña",
      value: password,
      onChangeText: (text: string) => setPassword(text),
      placeholder: "Contraseña",
    },
  ];
  // Buttons props
  const buttons = [
    {
      text: "Iniciar sesión",
      onPress: () => onLogin(email, password),
    },
    {
      text: "Registrarse",
      onPress: () => {
        navigation.navigate("Register" as never);
      },
    },
    {
      text: "GO",
      onPress: () => {
        navigation.navigate("TabNavigation" as never);
      },
    },
  ];

  return (
    <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior="height">
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Iniciar sesión</Text>
        <View style={styles.inputs}>
          {inputs.map((inputProps, key) => {
            return <TextInput {...inputProps} key={key} />;
          })}
        </View>
        <View style={styles.buttons}>
          {buttons.map((buttonProps, key) => {
            return (
              <IconTextButton
                className={styles.button}
                {...buttonProps}
                key={key}
              />
            );
          })}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default Login;