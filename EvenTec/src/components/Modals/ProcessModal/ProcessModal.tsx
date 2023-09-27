// React
import { View, Text, Modal, Pressable } from "react-native";
// Styles
import { styles } from "./ProcessModal.style";
import { GestureResponderEvent } from "react-native";
// Types
type ModalAnimation = "slide" | "fade" | "none";
// Interfaces
interface ProcessModalProps {
  animation?: ModalAnimation;
  visible: boolean;
  transparent?: boolean;
  content: any;
  setVisible: (visible: boolean) => void;
}

const ProcessModal = ({
  animation,
  visible,
  transparent,
  content,
  setVisible,
}: ProcessModalProps) => {
  const handleOnPressOut = (event: GestureResponderEvent) => {
    if (event.target === event.currentTarget) {
      setVisible(!visible);
    }
  };

  return (
    <Modal {...{ animation, visible, transparent }}>
      <Pressable style={styles.container} onPress={handleOnPressOut}>
        <View style={styles.modal}>
          <Text>{content.message}</Text>
        </View>
      </Pressable>
    </Modal>
  );
};
export default ProcessModal;
