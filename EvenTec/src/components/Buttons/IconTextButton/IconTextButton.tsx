// React
import { Pressable, Text, ViewStyle } from "react-native";
// Styles
import { styles } from "./IconTextButton.style";
// Icons
import { MaterialIcons } from "@expo/vector-icons";

interface IconTextButtonProps {
  icon?: string;
  text?: string;
  onPress?: () => void;
  className?: ViewStyle;
}

const IconTextButton = (props: IconTextButtonProps) => {
  return (
    <Pressable
      onPress={props.onPress}
      style={[styles.container, props.className ? props.className : undefined]}
    >
      {props.text && <Text style={styles.text}>{props.text}</Text>}
      {props.icon && (
        <MaterialIcons
          style={styles.icon}
          // @ts-ignore
          name={props.icon}
          size={30}
        />
      )}
    </Pressable>
  );
};
export default IconTextButton;
