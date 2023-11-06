// React
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
// Styles
import { styles } from "./OrganizationEventCard.style";
// Icons
import { MaterialIcons } from "@expo/vector-icons";
// Modal Context
import { useModal } from "../../../context/ModalContext";
// Utils
import { handleDate } from "../../../utils/handleDate";
// API
import { getEventCategory } from "../../../api/data/data";
import { deleteEvent } from "../../../api/events/events";
// Components
import IconTextButton from "../../Buttons/IconTextButton/IconTextButton";
interface EventCardProps {
  event: {
    _id: string;
    title?: string;
    image?: string;
    startTime?: string;
    endTime?: string;
    description?: string;
    location?: string;
    category?: string;
    capacity?: number;
    requiredCollaborators?: number;
  };
  onEventDelete: () => void;
}

const OrganizationEventCard = ({ event, onEventDelete }: EventCardProps) => {
  // Navigation
  const navigation = useNavigation();
  // Modal Context
  const { handleModal } = useModal();
  // Event props
  const {
    title,
    image,
    description,
    location,
    _id,
    category,
    capacity,
    requiredCollaborators,
  } = event;
  //  Date props
  const start = handleDate(event.startTime);
  const end = handleDate(event.endTime);
  // Get category
  const [categoryName, setCategoryName] = useState<string>("");
  const getCategory = async () => {
    const response = await getEventCategory(category);
    setCategoryName(response.name);
  };
  useEffect(() => {
    getCategory();
  }, []);
  // Delete event
  const handleDeleteEvent = async () => {
    const response = await deleteEvent(_id);
    if (response.status === 200) {
      handleModal({ ...response.data, code: response.status }, "fade");
      onEventDelete();
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTexts}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.dateLabel}>Inicio:</Text>
        <Text style={styles.date}>{start}</Text>
        <Text style={styles.dateLabel}>Final:</Text>
        <Text style={styles.date}>{end}</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.iconsContainer}>
          <View style={styles.iconTextContainer}>
            <MaterialIcons name="location-pin" style={styles.icon} />
            <Text style={styles.iconText}>{location}</Text>
          </View>
          <View style={styles.iconTextContainer}>
            <MaterialIcons name="label" style={styles.icon} />
            <Text style={styles.iconText}>{categoryName} </Text>
          </View>
          <View style={styles.iconTextContainer}>
            <MaterialIcons name="people" style={styles.icon} />
            <Text style={styles.iconText}>Aforo: {capacity} </Text>
          </View>
          <View style={styles.iconTextContainer}>
            <MaterialIcons name="people" style={styles.icon} />
            <Text style={styles.iconText}>Admins: {requiredCollaborators}</Text>
          </View>
        </View>
        <View style={styles.footerDivision} />
        <View style={styles.buttonsContainer}></View>
      </View>
      <View style={styles.buttonsContainer}>
        <IconTextButton
          className={styles.button}
          icon="edit"
          onPress={() => {
            // @ts-ignore
            navigation.navigate("EditEvent", { event: event });
          }}
        />
        <IconTextButton
          className={styles.button}
          icon="delete"
          onPress={() => {
            handleDeleteEvent();
          }}
        />
        <IconTextButton
          className={styles.button}
          icon="event-available"
          onPress={() => {
            navigation.navigate("CreateActivity", { event: event });
          }}
        />
        <IconTextButton
          className={styles.button}
          icon="person-add"
          onPress={() => {
            handleDeleteEvent();
          }}
        />
      </View>
    </View>
  );
};
export default OrganizationEventCard;
