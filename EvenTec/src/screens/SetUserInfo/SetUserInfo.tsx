// React
import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Image,
} from "react-native";
// Styles
import { styles } from "./SetUserInfo.style";
// Components
import TextInput from "../../components/Inputs/TextInput/TextInput";
import IconTextButton from "../../components/Buttons/IconTextButton/IconTextButton";
// Libraries
import * as ImagePicker from "expo-image-picker";
// Types
type KeyboardType =
  | "default"
  | "number-pad"
  | "decimal-pad"
  | "numeric"
  | "email-address"
  | "phone-pad"
  | "url";
import axios from "axios";
const Buffer = require("buffer").Buffer;
const SetUserInfo = () => {
  // Inputs states
  const [name, setName] = useState<string>("");
  const [carne, setCarne] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [image, setImage] = useState<any>("");

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
      reader.onloadend = () => {
        const base64data = reader.result;
        const binaryData = Buffer.from(base64data, "base64");
        setImage(binaryData);
      };
    }
  };

  const handleUpdateProfileInfo = async () => {
    try {
      const response = await axios.put(
        "https://campustecgatoapi-ccf0e8a36684.herokuapp.com/api/users/updateProfileInfo",
        {
          name: name,
          carne: carne,
          phone: phone,
          profilePicture: image,
        }
      );
      console.log(response.data.message);
    } catch (error) {
      // Handle the error here
      console.error("An error occurred while updating profile info:");
    }
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
        <View style={styles.imageContainer}>
          {/*<Image
            source={
              image
                ? { uri: image }
                : require("../../../assets/images/edit-image.png")
            }
            style={styles.image}
          />*/}
        </View>
        <IconTextButton
          className={styles.button}
          text="Pick a profile picture"
          onPress={pickImage}
        />
        <View style={styles.inputs}>
          {inputs.map((inputProps, key) => {
            return <TextInput {...inputProps} key={key} />;
          })}
        </View>
        <IconTextButton
          className={styles.button}
          text="Registrarse"
          onPress={() => {
            handleUpdateProfileInfo();
          }}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default SetUserInfo;
