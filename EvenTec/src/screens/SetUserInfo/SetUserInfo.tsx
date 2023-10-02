// React
import { useState } from "react";
import { View, Text, ScrollView, KeyboardAvoidingView } from "react-native";
// Styles
import { styles } from "./SetUserInfo.style";
// Components
import TextInput from "../../components/Inputs/TextInput/TextInput";
import IconTextButton from "../../components/Buttons/IconTextButton/IconTextButton";
// Types
type KeyboardType =
  | "default"
  | "number-pad"
  | "decimal-pad"
  | "numeric"
  | "email-address"
  | "phone-pad"
  | "url";

const SetUserInfo = () => {
  // Inputs states
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userName, setUserName] = useState<string>("");

  // Inputs props
  const inputs = [
    {
      title: "Nombre",
      value: userName,
      onChangeText: (text: string) => setUserName(text),
      placeholder: "Nombre del estudiante",
      keyboardType: "default" as KeyboardType,
    },
    {
      title: "Carné",
      value: email,
      onChangeText: (text: string) => setEmail(text),
      placeholder: "##########",
      keyboardType: "numeric" as KeyboardType,
    },
    {
      title: "Número de teléfono",
      value: password,
      onChangeText: (text: string) => setPassword(text),
      placeholder: "########",
      keyboardType: "numeric" as KeyboardType,
    },
  ];
  // Buttons props
  const buttons = [
    {
      text: "Registrarse",
      onPress: () => {},
    },
  ];
  return (
    <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior="height">
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Completa la información de usuario</Text>
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
export default SetUserInfo;
