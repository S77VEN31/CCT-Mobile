// EditEvent.tsx

// React
import { RouteProp, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, ScrollView, Text, View } from "react-native";
// Styles
import { styles } from "./EditEvent.style"; // Asegúrate de crear este archivo o usar otro ya existente.
// Modal Context
import { useModal } from "../../../context/ModalContext";
// API
import { getEventCategories, getEventCategory } from "../../../api/data/data";
import { updateEvent } from "../../../api/events/events"; // Asegúrate de crear esta función en tu archivo de API.
// Utils
import { handleDate } from "../../../utils/handleDate";
// Components
import IconTextButton from "../../../components/Buttons/IconTextButton/IconTextButton";
import DateTimeInput from "../../../components/Inputs/DateTimeInput/DateTimeInput";
import NumericInput from "../../../components/Inputs/NumericInput/NumericInput";
import TextInput from "../../../components/Inputs/TextInput/TextInput";
import DropdownModal from "../../../components/Modals/DropdownModal/DropdownModal";

// Types
type RootStackParamList = {
  EditEvent: { event: EventProps };
};
type EditEventRouteProp = RouteProp<RootStackParamList, "EditEvent">;
// Interfaces
interface EventProps {
  _id: string;
  title: string;
  description: string;
  startTime: Date;
  endTime: Date;
  location: string;
  capacity: number;
  requiredCollaborators: number;
  category: string;
  // Agrega cualquier otra propiedad que necesites para tu objeto de evento.
}
interface EditEventProps {
  route: EditEventRouteProp;
}

const EditEvent: React.FC<EditEventProps> = ({ route }) => {
  const { event } = route.params;

  const getCategory = async () => {
    const response = await getEventCategory(event.category);
  };
  useEffect(() => {
    getCategory();
  }, []);
  // Modal Context
  const { handleModal } = useModal();
  // Navigation
  const navigation = useNavigation();
  // Set modal visibility
  const [visible, setVisible] = useState<boolean>(false);
  // Inputs states
  const [data, setData] = useState<any>({ ...event });
  // Get categories
  const [categories, setCategories] = useState<any>([]);
  const getCategories = async () => {
    const response = await getEventCategories();
    setCategories(response.data);
  };
  useEffect(() => {
    getCategories();
  }, []);

  const handleUpdateEvent = async () => {
    const response = await updateEvent(data);
    handleModal({ ...response.data, code: response.status }, "fade");
    if (response.status === 200) {
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
      text: "Guardar cambios",
      onPress: () => handleUpdateEvent(),
    },
    {
      text: "Volver atrás",
      onPress: () => navigation.goBack(),
    },
  ];

  return (
    <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior="height">
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Crear Evento</Text>
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
          <NumericInput
            min={1}
            max={1000}
            count={data.capacity}
            setCount={(capacity: number) =>
              setData({ ...data, capacity: capacity })
            }
            text="Capacidad"
          />
          <NumericInput
            min={1}
            max={15}
            count={data.requiredCollaborators}
            setCount={(requiredCollaborators: number) =>
              setData({ ...data, requiredCollaborators: requiredCollaborators })
            }
            text="Colaboradores requeridos"
          />
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
      <DropdownModal
        dropdownText="Selecciona la categoria"
        data={categories}
        visible={visible}
        setVisible={setVisible}
        setSelected={(categoryName: string | null) => {
          setData({ ...data, categoryName: categoryName });
        }}
        transparent={true}
      />
    </KeyboardAvoidingView>
  );
};

export default EditEvent;
