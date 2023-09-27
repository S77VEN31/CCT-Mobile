// React
import { Pressable, Text, ViewStyle } from "react-native";
// Styles
import { styles } from "./IconTextButton.style";
// Icons
import { MaterialIcons } from "@expo/vector-icons";
// Types
interface IconTextButtonProps {
  icon?: string;
  text?: string;
  onPress?: () => void;
  className?: ViewStyle;
}

const IconTextButton = ({
  icon,
  text,
  onPress,
  className,
}: IconTextButtonProps) => {
  return (
    <Pressable
      {...{ onPress }}
      style={[styles.container, className ? className : undefined]}
    >
      {text && <Text style={styles.text}>{text}</Text>}
      {icon && (
        <MaterialIcons
          style={styles.icon}
          // @ts-ignore
          name={icon}
          size={30}
        />
      )}
    </Pressable>
  );
};
export default IconTextButton;
