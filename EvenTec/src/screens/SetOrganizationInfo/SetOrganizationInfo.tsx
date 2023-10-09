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
import { styles } from "./SetOrganizationInfo.style";
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

const SetOrganizationInfo = () => {
  // Inputs states
  const [data, setData] = useState<any>({
    name: "",
    carrerCode: "",
    phone: "",
    description: "",
    profilePicture: "",
  });
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
        setData({ ...data, profilePicture: binaryData });
      };
    }
  };
  const handleUpdateProfileInfo = async () => {
    const response = await updateProfileInfo(data);
    handleModal({ ...response.data, code: response.status }, "fade");
  };
  // Inputs props
  const inputs = [
    {
      title: "Nombre",
      value: data.name,
      onChangeText: (text: string) => setData({ ...data, name: text }),
      placeholder: "Nombre de la organización",
      keyboardType: "default" as KeyboardType,
    },
    {
      title: "Codigo de carrera",
      value: data.carrerCode,
      onChangeText: (text: string) => setData({ ...data, carrerCode: text }),
      placeholder: "XX####",
      keyboardType: "default" as KeyboardType,
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
      placeholder: "Descripción de la organización",
      keyboardType: "default" as KeyboardType,
      numberOfLines: 4,
      maxLength: 200,
    },
  ];

  return (
    <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior="height">
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>
          Edita la información de la organización
        </Text>
        <View style={styles.setImageContainer}>
          <View style={styles.imageContainer}>
            <Pressable style={styles.imageButton} onPress={pickImage}>
              <Image
                source={
                  data.profilePicture !== ""
                    ? {
                        uri: `data:image/png;base64,${Buffer.from(
                          data.profilePicture
                        ).toString("base64")}`,
                      }
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
export default SetOrganizationInfo;
