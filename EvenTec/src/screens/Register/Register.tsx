// React
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { KeyboardAvoidingView, ScrollView, Text, View } from "react-native";
// Styles
import { styles } from "./Register.style";
// Auth Context
import { useAuth } from "../../context/AuthContext";
// Components
import IconTextButton from "../../components/Buttons/IconTextButton/IconTextButton";
import SwitchInput from "../../components/Inputs/SwitchInput/SwitchInput";
import TextInput from "../../components/Inputs/TextInput/TextInput";

const Register = () => {
  // Navigation
  const navigation = useNavigation();
  // Auth Context
  const { onRegister, onLogin } = useAuth();
  // Inputs states
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [isOrganization, setIsOrganization] = useState<boolean>(false);

  const handleRegister = async () => {
    const register = await onRegister(
      email,
      password,
      userName,
      isOrganization
    );
    if (!register) return;
    await onLogin(email, password);
    if (isOrganization) {
      navigation.navigate("SetOrganizationInfo" as never);
    } else {
      navigation.navigate("SetUserInfo" as never);
    }
  };

  // Inputs props
  const inputs = [
    {
      title: "Nombre de usuario",
      value: userName,
      onChangeText: (text: string) => setUserName(text),
      placeholder: "Nombre de usuario",
    },
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
      text: "Registrarse",
      onPress: () => handleRegister(),
    },
    {
      text: "Iniciar sesión",
      onPress: () => navigation.navigate("Login" as never),
    },
  ];

  return (
    <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior="height">
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Registrarse</Text>
        <View style={styles.inputs}>
          {inputs.map((inputProps, key) => {
            return <TextInput {...inputProps} key={key} />;
          })}
          <SwitchInput
            text="¿Es una organización?"
            isActivated={isOrganization}
            setIsActivated={setIsOrganization}
          />
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
export default Register;
