// React
import { View, Text, TextInput as Input } from "react-native";
// Styles
import { styles } from "./TextInput.style";
// Interfaces
interface TextInputProps {
  title?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

const TextInput = ({
  title,
  placeholder,
  value,
  onChangeText,
}: TextInputProps) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Input {...{ placeholder, value, onChangeText }} />
    </View>
  );
};
export default TextInput;
