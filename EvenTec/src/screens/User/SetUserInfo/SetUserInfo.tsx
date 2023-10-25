// React
import { StackActions, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { KeyboardAvoidingView, ScrollView, Text, View } from "react-native";
// Styles
import { styles } from "./SetUserInfo.style";
// Modal Context
import { useModal } from "../../../context/ModalContext";
// API
import { getCarrers } from "../../../api/data/data";
import { updateProfile } from "../../../api/users/users";
// Buffer
const Buffer = require("buffer").Buffer;
// Types
import { KeyboardType } from "../../../constants/Types";
// Components
import * as ImagePicker from "expo-image-picker";
import DropDownPicker from "react-native-dropdown-picker";
import IconTextButton from "../../../components/Buttons/IconTextButton/IconTextButton";
import ImageInput from "../../../components/Inputs/ImageInput/ImageInput";
import TextInput from "../../../components/Inputs/TextInput/TextInput";

const SetUserInfo = () => {
  // Navigation
  const navigation = useNavigation();
  // Modal Context
  const { handleModal } = useModal();
 
  // Inputs states
  const [data, setData] = useState<any>({
    name: "",
    carne: "",
    phone: "",
    carrer: "",
    description: "",
    profilePicture: "",
  });
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [items, setItems] = useState([
    { label: "Cargando...", value: "Cargando..." },
  ]);

  // Get carrers list
  const getCarrersList = async () => {
    const response = await getCarrers();
    const carrers = response.data.map((carrer: any) => {
      return {
        label: carrer.name,
        value: carrer.code,
      };
    });
    setItems(carrers);
  };
  useEffect(() => {
    getCarrersList();
  }, []);

  // Image picker
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      const imageUri = result.assets[0].uri;
      const response = await fetch(imageUri);
      const blob = await response.blob();
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = async () => {
        // Convert the blob to base64
        // @ts-ignore
        const base64data = reader.result.split(",")[1];
        const binaryData = Buffer.from(base64data, "base64");
        setData({ ...data, profilePicture: binaryData });
      };
    }
  };

  const handleUpdateProfileInfo = async () => {
    const response = await updateProfile(data);
    handleModal({ ...response.data, code: response.status }, "fade");
    if (response.status === 200) {
      //@ts-ignore
      navigation.dispatch(StackActions.popToTop());
    }
  };

  // Inputs props
  const inputs = [
    {
      title: "Nombre",
      value: data.name,
      onChangeText: (text: string) => setData({ ...data, name: text }),
      placeholder: "Nombre del estudiante",
      keyboardType: "default" as KeyboardType,
    },
    {
      title: "Carné",
      value: data.carne,
      onChangeText: (text: string) => setData({ ...data, carne: text }),
      placeholder: "##########",
      keyboardType: "numeric" as KeyboardType,
    },
    {
      title: "Número de teléfono",
      value: data.phone,
      onChangeText: (text: string) => setData({ ...data, phone: text }),
      placeholder: "########",
      keyboardType: "numeric" as KeyboardType,
    },
    {
      title: "Descripción",
      value: data.description,
      onChangeText: (text: string) => setData({ ...data, description: text }),
      placeholder: "Cuentanos un poco sobre ti",
      keyboardType: "default" as KeyboardType,
      numberOfLines: 4,
      maxLength: 200,
    },
  ];

  return (
    <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior="height">
      <View style={styles.header}>
        <Text style={styles.title}>Edita tu información</Text>
        <DropDownPicker
          onChangeValue={(value) => {
            setData({ ...data, carrer: value });
          }}
          placeholder="Selecciona tu carrera"
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <ImageInput onPress={pickImage} data={data} />
        <View style={styles.inputs}>
          {inputs.map((inputProps, key) => {
            return <TextInput {...inputProps} key={key} />;
          })}
        </View>
      </ScrollView>
      <IconTextButton
        className={styles.confirmButton}
        text="Confirmar"
        onPress={() => {
          handleUpdateProfileInfo();
        }}
      />
    </KeyboardAvoidingView>
  );
};
export default SetUserInfo;
