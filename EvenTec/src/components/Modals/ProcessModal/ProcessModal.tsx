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

  const { code, message } = content;

  return (
    <Modal {...{ animationType, visible, transparent }}>
      <Pressable style={styles.container} onPress={handleOnPressOut}>
        <View style={styles.modal}>
          <View style={styles.header}>
            <Text style={styles.title}>{code}</Text>
            <Pressable onPress={() => handleClose()}>
              <MaterialIcons name="close" style={styles.headerIcon} />
            </Pressable>
          </View>
          <View style={styles.content}>
            <Text style={styles.contentTitle}>{message}</Text>
            <MaterialIcons name="error" style={styles.contentIcon} />
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};
export default ProcessModal;
