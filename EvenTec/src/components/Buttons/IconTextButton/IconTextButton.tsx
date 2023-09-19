// React
import { Pressable, Text } from "react-native";
// Styles
import { styles } from "./IconTextButton.style";
// Icons
import { MaterialIcons } from "@expo/vector-icons";

interface IconTextButtonProps {
  icon?: string;
  text?: string;
  onPress?: () => void;
}

const IconTextButton = (props: IconTextButtonProps) => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
      <MaterialIcons
        style={styles.icon}
        // @ts-ignore
        name={props.icon}
        size={30}
      />
    </Pressable>
  );
};
export default IconTextButton;
