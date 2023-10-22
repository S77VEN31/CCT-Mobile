// React
import {
  GestureResponderEvent,
  Modal,
  Pressable,
  Text,
  View,
} from "react-native";
// Styles
import { styles } from "./ProcessModal.style";
// Icons
import { MaterialIcons } from "@expo/vector-icons";
// Types
import { ModalAnimationTypes } from "../../../constants/Types";
// Interfaces
interface ProcessModalProps {
  animationType?: ModalAnimationTypes;
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

  const { code, message, name } = content;
  return (
    <Modal {...{ animationType, visible, transparent }}>
      <Pressable style={styles.container} onPress={handleOnPressOut}>
        <View style={styles.modal}>
          <View style={styles.header}>
            <Text style={styles.title}>{name}</Text>
            <Pressable onPress={() => handleClose()}>
              <MaterialIcons name="close" style={styles.headerIcon} />
            </Pressable>
          </View>
          <View style={styles.content}>
            <Text
              style={[styles.contentTitle, code === 200 && styles.successLine]}
            >
              {message}
            </Text>
            <View style={styles.codeIconContainer}>
              <MaterialIcons
                name="error"
                style={[
                  styles.contentIcon,
                  code === 200 && styles.successColor,
                ]}
              />
              <Text
                style={[
                  styles.contentCode,
                  code === 200 && styles.successColor,
                ]}
              >
                CODE: {code}
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};
export default ProcessModal;
