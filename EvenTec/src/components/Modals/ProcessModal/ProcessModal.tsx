// React
import {
  View,
  Text,
  Modal,
  Pressable,
  GestureResponderEvent,
} from "react-native";
// Styles
import { styles } from "./ProcessModal.style";
// Icons
import { MaterialIcons } from "@expo/vector-icons";
// Types
type ModalAnimation = "slide" | "fade" | "none";
// Interfaces
interface ProcessModalProps {
  animationType?: ModalAnimation;
  visible: boolean;
  transparent?: boolean;
  content: any;
  setVisible: (visible: boolean) => void;
}

const ProcessModal = ({
  animationType,
  visible,
  transparent,
  content,
  setVisible,
}: ProcessModalProps) => {

  const handleClose = () => {
    setVisible(!visible);
  };

  const handleOnPressOut = (event: GestureResponderEvent) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };
  console.log("content is:", content);
  const {message} = content;
  const {code} = message;
  console.log("message is:", message);

console.log("code is:", code);
  return (
    <Modal {...{ animationType, visible, transparent }}>
      <Pressable style={styles.container} onPress={handleOnPressOut}>
        <View style={styles.modal}>
          <View style={styles.header}>
            <Text>
             { code}
            </Text>
          <Pressable onPress={() => handleClose()}>
            <MaterialIcons name="close" size={30} color="black" />
          </Pressable>
          </View>
          
          <MaterialIcons name="error" size={30} color="black" />
          <Text>message</Text>
        </View>
      </Pressable>
    </Modal>
  );
};
export default ProcessModal;
