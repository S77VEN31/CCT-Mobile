import { createContext, useContext, useState } from "react";
import { Modal, Text } from "react-native";

type ModalAnimation = "slide" | "fade" | "none";

interface ModalProps {
  handleModal: (data: any, animation?: ModalAnimation) => void;
}

const ModalContext = createContext<ModalProps>({} as ModalProps);

export const useModal = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }: any) => {
  const [modalState, setModalState] = useState<Boolean>(false);
  const [modalAnimation, setModalAnimation] = useState<ModalAnimation>("slide");
  const [modalContent, setModalContent] = useState<any>({
    message: "no hay info",
  });
  const handleModal = (data: any, animation?: ModalAnimation) => {
    setModalContent(data), setModalState(!modalState);
    if (animation) {
      setModalAnimation(animation);
    }
  };

  const value = {
    handleModal,
  };

  return (
    <ModalContext.Provider value={value as ModalProps}>
      {children}
      <Modal animationType={modalAnimation} visible={modalState as boolean}>
        {<Text>{modalContent.message}</Text>}
      </Modal>
    </ModalContext.Provider>
  );
};
