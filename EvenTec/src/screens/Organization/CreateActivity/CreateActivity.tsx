// React
import { RouteProp, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { KeyboardAvoidingView, ScrollView, Text, View } from "react-native";
// Styles
import { styles } from "./CreateActivity.style";
// Modal Context
import { useModal } from "../../../context/ModalContext";
// API
// Utils
import { handleDate } from "../../../utils/handleDate";
// Components
import IconTextButton from "../../../components/Buttons/IconTextButton/IconTextButton";
import DateTimeInput from "../../../components/Inputs/DateTimeInput/DateTimeInput";
import TextInput from "../../../components/Inputs/TextInput/TextInput";
// Types
type RootStackParamList = {
  CreateActivity: { eventId: string; collaborators: string[] };
};
type CreateActivityRouteProp = RouteProp<RootStackParamList, "CreateActivity">;

interface EditEventProps {
  route: CreateActivityRouteProp;
}
const CreateActivity = ({ route }) => {
  // Modal Context
  const { handleModal } = useModal();
  // Navigation
  const navigation = useNavigation();
  // Inputs states
  const [data, setData] = useState<any>({
    title: "",
    description: "",
    startTime: new Date(),
    endTime: new Date(),
    location: "",
    collaborator: "",
  });

  const handleCreateActivity = async () => {
    console.log(data);
  };

  const inputs = [
    {
      title: "Título",
      placeholder: "Título",
      value: data.title,
      onChangeText: (text: string) => setData({ ...data, title: text }),
    },
    {
      title: "Descripción",
      placeholder: "Descripción",
      numberOfLines: 4,
      maxLength: 200,
      value: data.description,
      onChangeText: (text: string) => setData({ ...data, description: text }),
    },
    {
      title: "Lugar",
      placeholder: "Lugar",
      value: data.location,
      onChangeText: (text: string) => setData({ ...data, location: text }),
    },
  ];

  const buttons = [
    {
      text: "Crear Evento",
      onPress: () => handleCreateActivity(),
    },
    {
      text: "Volver atrás",
      onPress: () => navigation.goBack(),
    },
  ];

  return (
    <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior="height">
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Crear Actividad</Text>
        <View style={styles.inputs}>
          {inputs.map((inputProps, key) => {
            return <TextInput {...inputProps} key={key} />;
          })}
          <View style={styles.dateTimeContainer}>
            <View>
              <Text style={styles.dateTimeTitle}>Fecha y hora inicio</Text>
              <Text style={styles.dateTime}>
                {handleDate(data.startTime.toString())}
              </Text>
            </View>
            <DateTimeInput
              mode="date"
              dateTime={data.startTime}
              setDatetime={(date: Date) => {
                setData({ ...data, startTime: date });
              }}
            />
            <DateTimeInput
              mode="time"
              dateTime={data.startTime}
              setDatetime={(date: Date) => {
                setData({ ...data, startTime: date });
              }}
            />
          </View>
          <View style={styles.dateTimeContainer}>
            <View>
              <Text style={styles.dateTimeTitle}>Fecha y hora final</Text>
              <Text style={styles.dateTime}>
                {handleDate(data.endTime.toString())}
              </Text>
            </View>
            <DateTimeInput
              mode="date"
              dateTime={data.endTime}
              setDatetime={(date: Date) => setData({ ...data, endTime: date })}
            />
            <DateTimeInput
              mode="time"
              dateTime={data.endTime}
              setDatetime={(date: Date) => setData({ ...data, endTime: date })}
            />
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
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default CreateActivity;
