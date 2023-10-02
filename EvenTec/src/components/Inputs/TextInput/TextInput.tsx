// React
import { View, Text, TextInput as Input } from "react-native";
// Styles
import { styles } from "./TextInput.style";
// Types
type KeyboardType =
  | "default"
  | "number-pad"
  | "decimal-pad"
  | "numeric"
  | "email-address"
  | "phone-pad"
  | "url"
// Interfaces
interface TextInputProps {
  title?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  keyboardType?: KeyboardType | undefined;
}

const TextInput = ({
  title,
  placeholder,
  value,
  onChangeText,
  keyboardType,
}: TextInputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{title}</Text>
      <Input
        style={styles.input}
        {...{ placeholder, value, onChangeText, keyboardType }}
      />
    </View>
  );
};
export default TextInput;
