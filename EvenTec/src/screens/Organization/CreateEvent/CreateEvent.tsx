// React
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, ScrollView, Text, View } from "react-native";
// Styles
import { styles } from "./CreateEvent.style";
// Components
import IconTextButton from "../../../components/Buttons/IconTextButton/IconTextButton";
import DateTimeInput from "../../../components/Inputs/DateTimeInput/DateTimeInput";
import NumericInput from "../../../components/Inputs/NumericInput/NumericInput";
import TextInput from "../../../components/Inputs/TextInput/TextInput";
import DropdownModal from "../../../components/Modals/DropdownModal/DropdownModal";
// API
import { getCarrersList } from "../../../api/data/data";
const CreateEvent = () => {
  const navigation = useNavigation();
  // Set modal visibility
  const [visible, setVisible] = useState<boolean>(false);
  const [data, setData] = useState<any>({
    title: "",
    description: "",
    startTime: new Date(),
    endTime: new Date(),
    location: "",
    capacity: 0,
    requiredCollaborators: 0,
    category: "",
  });

  // Get categories
  const [categories, setCategories] = useState<any>([]);
  const getCategories = async () => {
    const response = await getCarrersList();
    setCategories(response.data);
  };
  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleSubmit = () => {
    console.log("Evento creado");
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
      onPress: () => handleSubmit(),
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
              <Text style={styles.dateTime}>{data.startTime.toString()}</Text>
            </View>
            <DateTimeInput
              mode="date"
              dateTime={data.startTime}
              setDatetime={(date: Date) =>
                setData({ ...data, startTime: date })
              }
            />
            <DateTimeInput
              mode="time"
              dateTime={data.startTime}
              setDatetime={(date: Date) =>
                setData({ ...data, startTime: date })
              }
            />
          </View>
          <View style={styles.dateTimeContainer}>
            <View>
              <Text style={styles.dateTimeTitle}>Fecha y hora final</Text>
              <Text style={styles.dateTime}>{data.endTime.toString()}</Text>
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
          <View style={styles.categoryContainer}>
            <Text style={styles.dateTimeTitle}>Categoria del evento</Text>
            <IconTextButton
              text={data.category || "Selecciona la categoria"}
              onPress={() => setVisible(true)}
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
      <DropdownModal
        data={categories}
        visible={visible}
        setVisible={setVisible}
        setSelected={(category: string | null) => {
          setData({ ...data, category: category });
        }}
        transparent={true}
      />
    </KeyboardAvoidingView>
  );
};

export default CreateEvent;
