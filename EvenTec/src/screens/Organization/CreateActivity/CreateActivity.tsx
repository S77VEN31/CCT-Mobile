// React
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, ScrollView, Text, View } from "react-native";
// Styles
import { styles } from "./CreateActivity.style";
// Modal Context
import { useModal } from "../../../context/ModalContext";
// API
import { addEventActivity } from "../../../api/events/events";
import { getOrganizationMembers } from "../../../api/users/users";
// Utils
import { handleDate } from "../../../utils/handleDate";
// Components
import IconTextButton from "../../../components/Buttons/IconTextButton/IconTextButton";
import SelectCollaborators from "../../../components/CheckLists/SelectCollaborators/SelectCollaborators";
import DateTimeInput from "../../../components/Inputs/DateTimeInput/DateTimeInput";
import TextInput from "../../../components/Inputs/TextInput/TextInput";

const CreateActivity = ({ route }: any) => {
  // Modal Context
  const { handleModal } = useModal();
  const { eventId, collaborators } = route.params || {};
  const [members, setMembers] = useState<any>([]);
  const [membersList, setMembersList] = useState<any>([]);
  const [selectedCollaborator, setSelectedCollaborator] = useState<string[]>(
    []
  );
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
    eventId: eventId,
  });

  const getMembers = async () => {
    const response = await getOrganizationMembers();
    setMembers(response.data);
  };

  const processMembers = () => {
    const membersList = members.map((collaborator: any) => {
      if (collaborators.includes(collaborator._id)) {
        return {
          id: collaborator._id,
          name: collaborator.name,
        };
      }
    });
    setMembersList(membersList);
  };

  useEffect(() => {
    getMembers();
  }, []);

  useEffect(() => {
    processMembers();
  }, [members]);

  useEffect(() => {
    setData({ ...data, collaborator: selectedCollaborator[0] });
  }, [selectedCollaborator]);

  const handleCreateActivity = async () => {
    const response = await addEventActivity(data);
    if (response.status === 200) {
      handleModal({ ...response.data, code: response.status }, "fade");
      navigation.goBack();
    }
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
      <View style={styles.header}>
        <Text style={styles.title}>Crear Actividad</Text>
        <View style={styles.checkbox}>
          <Text style={styles.collaborator}>Seleccione el colaborador</Text>
          {collaborators.length > 0 ? (
            <SelectCollaborators
              selectedCollaborators={selectedCollaborator}
              setSelectedCollaborators={setSelectedCollaborator}
              members={membersList}
              maxSelectable={1}
            />
          ) : (
            <Text style={styles.noCollaboratorsAvailable}>
              No hay colaboradores disponibles
            </Text>
          )}
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
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
