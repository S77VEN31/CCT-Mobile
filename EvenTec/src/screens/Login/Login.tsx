// React
import { useState } from "react";
import { View, Modal, Text } from "react-native";
// Styles
import { styles } from "./Login.style";
// Auth Context
import { useAuth } from "../../context/AuthContext";
// Components
import TextInput from "../../components/Inputs/TextInput/TextInput";
import IconTextButton from "../../components/Buttons/IconTextButton/IconTextButton";
// Navigation
import { useNavigation } from "@react-navigation/native";
// Modal Context
import { useModal } from "../../context/ModalContext";
const Login = () => {
  // Inputs states
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // Auth Context
  const { onLogin } = useAuth();
  // Navigation
  const navigation = useNavigation();
 // Modal Context
  const { handleModal } = useModal();
  // Inputs props
  const inputs = [
    {
      title: "Email",
      value: email,
      onChangeText: (text: string) => setEmail(text),
      placeholder: "Email",
    },
    {
      title: "Password",
      value: password,
      onChangeText: (text: string) => setPassword(text),
      placeholder: "Password",
    },
  ];
  // Buttons props
  const buttons = [
    {
      text: "Login",
      onPress: () => onLogin(email, password),
    },
    {
      text: "GO",
      onPress: () => {
        navigation.navigate("TabNavigation" as never);
      },
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.inputs}>
        {inputs.map((inputProps) => {
          return <TextInput {...inputProps} />;
        })}
      </View>
      <View style={styles.buttons}>
        {buttons.map((buttonProps) => {
          return <IconTextButton {...buttonProps} />;
        })}
      </View>

      <IconTextButton
        text="show modal"
        onPress={()=> handleModal({message: "hola"}, "slide")}
      />
    </View>
  );
};
export default Login;
