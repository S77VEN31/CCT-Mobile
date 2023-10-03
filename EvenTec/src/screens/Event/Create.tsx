// React
import { useState } from "react";
import { View, Text, ScrollView, KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
// Styles
import { styles } from "./Create.style";

// Components
import TextInput from "../../components/Inputs/TextInput/TextInput";
import IconTextButton from "../../components/Buttons/IconTextButton/IconTextButton";
import SwitchInput from "../../components/Inputs/SwitchInput/SwitchInput";


const Create = () => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [location, setLocation] = useState<string>("");

    const navigation = useNavigation();

    const handleSubmit = () => {
        console.log("Evento creado:", { title, description, date, location });
    };

    const inputs = [
        {
            title: "Nombre",
            placeholder: "Título",
            value: title,
            onChangeText: (text: string) => setTitle(text)
        },
        {
            title: "Descripcion",
            placeholder: "Descripción",
            value: description,
            onChangeText: (text: string) => setDescription(text)
        },
        {
            title: "Fecha",
            placeholder: "Fecha",
            value: date,
            onChangeText: (text: string) => setDate(text)
        },
        {
            title: "Lugar",
            placeholder: "Lugar",
            value: location,
            onChangeText: (text: string) => setLocation(text)
        }
    ];

    const buttons = [
        {
            text: "Crear Evento",
            onPress: () => handleSubmit()
        },
        {
            text: "Volver atrás",
            onPress: () => navigation.goBack()
        }
    ];

    return (
        <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior="height">
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>Crear Evento</Text>
                <View style={styles.inputs}>
          {inputs.map((inputProps, key) => {
            return <TextInput {...inputProps} key={key} />;
          })}
        </View>
        <View style={styles.buttons}>
          {buttons.map((buttonProps, key) => {
            return (
              <IconTextButton
                className={styles.button}
                {...buttonProps}
                key={key}
              />
            );
          })}
        </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Create;