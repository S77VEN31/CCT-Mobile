// React
import React, { useEffect, useState } from "react";
import { GestureResponderEvent, Modal, Pressable, View } from "react-native";
// Styles
import { styles } from "./DropdownModal.style";
// Icons
import { MaterialIcons } from "@expo/vector-icons";
// Components
import DropDownPicker from "react-native-dropdown-picker";
// Types
import { ModalAnimationTypes } from "../../../constants/Types";
// Interfaces
interface DropdownModalProps {
  animationType?: ModalAnimationTypes;
  visible: boolean;
  transparent?: boolean;
  setVisible: (visible: boolean) => void;
  setSelected: (selected: string | null) => void;
  data: any;
  dropdownText: string;
}

const DropdownModal = ({
  animationType,
  visible,
  transparent,
  setVisible,
  setSelected,
  data,
  dropdownText,
}: DropdownModalProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [items, setItems] = useState([
    { label: "Cargando...", value: "Cargando..." },
  ]);
  useEffect(() => {
    const formatedData = data.map((item: any) => {
      return {
        label: item.name,
        value: item.name,
      };
    });
    setItems(formatedData);
  }, [data]);
  const handleClose = () => {
    setVisible(!visible);
  };

  const handleOnPressOut = (event: GestureResponderEvent) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };
  return (
    <Modal {...{ animationType, visible, transparent }}>
      <Pressable style={styles.container} onPress={handleOnPressOut}>
        <View style={styles.modal}>
          <Pressable onPress={() => handleClose()}>
            <MaterialIcons name="close" style={styles.headerIcon} />
          </Pressable>
          <DropDownPicker
            onChangeValue={(value) => {
              setSelected(value);
              handleClose();
            }}
            placeholder={dropdownText}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
        </View>
      </Pressable>
    </Modal>
  );
};
export default DropdownModal;
