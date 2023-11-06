// React
import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
// Style
import { styles } from "./SendProposal.style";
// Auth Context
import { useAuth } from "../../../context/AuthContext";
// Modal Context
import { useModal } from "../../../context/ModalContext";
// Libraries
import DropDownPicker from "react-native-dropdown-picker";
// API
import { sendProposal } from "../../../api/proposals/proposals";
import { getOrganizations } from "../../../api/users/users";
// Components
import IconTextButton from "../../../components/Buttons/IconTextButton/IconTextButton";
import TextInput from "../../../components/Inputs/TextInput/TextInput";

const SendProposal = () => {
  const { onLogout } = useAuth();
  const { handleModal } = useModal();
  const [data, setData] = useState<any>({
    title: "",
    description: "",
    organization: null,
  });
  const [organizations, setOrganizations] = useState<any>([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [items, setItems] = useState(organizations);

  const getAllOrganizations = async () => {
    const response = await getOrganizations();
    setOrganizations(
      response.data.map((item: any) => {
        return {
          label: item.name,
          value: item._id,
        };
      })
    );
  };

  const handleSendProposal = async () => {
    const response = await sendProposal(data);
    console.log(response);
    handleModal({ ...response.data, code: response.status }, "fade");
  };

  useEffect(() => {
    getAllOrganizations();
  }, []);

  useEffect(() => {
    setItems(organizations);
  }, [organizations]);

  const inputs = [
    {
      title: "Título",
      placeholder: "Título de la actividad",
      value: data.title,
      onChangeText: (text: string) => setData({ ...data, title: text }),
    },
    {
      title: "Descripción",
      placeholder: "Describe tu propuesta",
      value: data.description,
      numberOfLines: 8,
      onChangeText: (text: string) => setData({ ...data, description: text }),
    },
  ];

  return (
    <View style={styles.container}>
      <IconTextButton text="logout" onPress={() => onLogout()} />
      <View style={styles.dropdownContainer}>
        <DropDownPicker
          onChangeValue={(value) => {
            setData({ ...data, organization: value });
          }}
          placeholder={"Selecciona la asociación" || data.organization}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
      </View>
      <ScrollView contentContainerStyle={styles.inputsContainer}>
        {inputs.map((input, index) => (
          <TextInput {...input} key={index} />
        ))}
        <IconTextButton
          text="Enviar propuesta"
          onPress={() => {
            handleSendProposal();
          }}
        />
      </ScrollView>
    </View>
  );
};
export default SendProposal;
