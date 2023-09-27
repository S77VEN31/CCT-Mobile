// React
import { createContext, useContext, useState } from "react";
// Components
import ProcessModal from "../components/Modals/ProcessModal/ProcessModal";
// Types
type ModalAnimation = "slide" | "fade" | "none";
// Interfaces
interface ModalProps {
  handleModal: (data: any, animationType?: ModalAnimation) => void;
}

const ModalContext = createContext<ModalProps>({} as ModalProps);

export const useModal = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }: any) => {
  const transparent = true;
  const [visible, setVisible] = useState<boolean>(false);
  const [animationType, setAnimationType] = useState<ModalAnimation>("slide");
  const [content, setContent] = useState<any>({
    message: "no hay info",
  });

  const handleModal = (data: any, animationType?: ModalAnimation) => {
    if (animationType) {
      setAnimationType(animationType);
    }
    setContent(data), setVisible(!visible);
  };

  const value = {
    handleModal,
  };

  return (
    <ModalContext.Provider value={value as ModalProps}>
      {children}
      <ProcessModal
        {...{ visible, animationType, content, transparent, setVisible }}
      />
    </ModalContext.Provider>
  );
};
