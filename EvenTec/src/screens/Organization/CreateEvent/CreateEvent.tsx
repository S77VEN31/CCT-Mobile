// React
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { KeyboardAvoidingView, ScrollView, Text, View } from "react-native";
// Styles
import { styles } from "./CreateEvent.style";
// Components
import IconTextButton from "../../../components/Buttons/IconTextButton/IconTextButton";
import DateTimeInput from "../../../components/Inputs/DateTimeInput/DateTimeInput";
import TextInput from "../../../components/Inputs/TextInput/TextInput";
// Types

const CreateEvent = () => {
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
      title: "Título",
      placeholder: "Título",
      value: title,
      onChangeText: (text: string) => setTitle(text),
    },
    {
      title: "Descripción",
      placeholder: "Descripción",
      numberOfLines: 4,
      maxLength: 200,
      value: description,
      onChangeText: (text: string) => setDescription(text),
    },
    {
      title: "Lugar",
      placeholder: "Lugar",
      value: location,
      onChangeText: (text: string) => setLocation(text),
    },
  ];

  const buttons = [
    {
      text: "Crear Evento",
      onPress: () => handleSubmit(),
    },
    {
      text: "Volver atrás",
      onPress: () => navigation.goBack(),
    },
  ];

  const [dateTime, setDateTime] = useState(new Date(1598051730000));

  return (
    <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior="height">
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Crear Evento</Text>

        <View style={styles.inputs}>
          {inputs.map((inputProps, key) => {
            return <TextInput {...inputProps} key={key} />;
          })}
          <View style={styles.dateTimeContainer}>
            <Text style={styles.dateTime}>{dateTime.toString()}</Text>
            <DateTimeInput
              mode="date"
              dateTime={dateTime}
              setDatetime={setDateTime}
            />
            <DateTimeInput
              mode="time"
              dateTime={dateTime}
              setDatetime={setDateTime}
            />
          </View>
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

export default CreateEvent;
