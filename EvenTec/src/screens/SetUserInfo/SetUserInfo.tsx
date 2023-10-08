// React
import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Image,
  Pressable,
} from "react-native";
// Styles
import { styles } from "./SetUserInfo.style";
// Components
import TextInput from "../../components/Inputs/TextInput/TextInput";
import IconTextButton from "../../components/Buttons/IconTextButton/IconTextButton";
// API
import { updateProfileInfo } from "../../api/users/users";
// Buffer
const Buffer = require("buffer").Buffer;
// Libraries
import * as ImagePicker from "expo-image-picker";
// Modal Context
import { useModal } from "../../context/ModalContext";
// Types
type KeyboardType =
  | "default"
  | "number-pad"
  | "decimal-pad"
  | "numeric"
  | "email-address"
  | "phone-pad"
  | "url";

const SetUserInfo = () => {
  // Inputs states
  const [name, setName] = useState<string>("");
  const [carne, setCarne] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [profilePicture, setProfilePicture] = useState<string>("");
  const [image, setImage] = useState<string>("");
  // Modal Context
  const { handleModal } = useModal();
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
        setProfilePicture(binaryData);
        // Read the image blob and set it as the image uri
        const img = Buffer.from(binaryData).toString("base64");
        const imageUri = `data:image/png;base64,${img}`;
        setImage(imageUri);
      };
    }
  };
  const handleUpdateProfileInfo = async () => {
      const response = await updateProfileInfo({
        name,
        carne,
        phone,
        profilePicture,
      });
      handleModal(
        { ...response.data, code: response.status },
        "fade"
      )
  };
  // Inputs props
  const inputs = [
    {
      title: "Nombre",
      value: name,
      onChangeText: (text: string) => setName(text),
      placeholder: "Nombre del estudiante",
      keyboardType: "default" as KeyboardType,
    },
    {
      title: "Carné",
      value: carne,
      onChangeText: (text: string) => setCarne(text),
      placeholder: "##########",
      keyboardType: "numeric" as KeyboardType,
    },
    {
      title: "Número de teléfono",
      value: phone,
      onChangeText: (text: string) => setPhone(text),
      placeholder: "########",
      keyboardType: "numeric" as KeyboardType,
    },
  ];

  return (
    <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior="height">
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Completa tu información</Text>
        <View style={styles.setImageContainer}>
          <View style={styles.imageContainer}>
            <Pressable style={styles.imageButton} onPress={pickImage}>
              <Image
                source={
                  image
                    ? { uri: image }
                    : require("../../../assets/images/edit-image.png")
                }
                style={styles.image}
              />
            </Pressable>
          </View>
          <IconTextButton
            className={styles.button}
            text="Pick a profile picture"
            onPress={pickImage}
          />
        </View>
        <View style={styles.inputs}>
          {inputs.map((inputProps, key) => {
            return <TextInput {...inputProps} key={key} />;
          })}
        </View>
        <IconTextButton
          className={styles.button}
          text="Confirmar"
          onPress={() => {
            handleUpdateProfileInfo();
          }}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default SetUserInfo;
