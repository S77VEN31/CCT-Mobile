// React
import { useNavigation } from "@react-navigation/native";
import { Image, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
// Styles
import { styles } from "./EventCard.style";
// Icons
import { MaterialIcons } from "@expo/vector-icons";
// Modal Context
import { useModal } from "../../../context/ModalContext";
// Utils
import { handleDate } from "../../../utils/handleDate";
// API
import { getEventCategory } from "../../../api/data/data";
// Interfaces
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
  };
}

const EventCard = ({ event }: EventCardProps) => {
  // Navigation
  const navigation = useNavigation();
  // Modal Context
  const { handleModal } = useModal();
  // Event props
  const { title, image, description, location, _id, category, capacity } =
    event;
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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTexts}>
          <Text>{categoryName}</Text>
          <Text>{capacity}</Text>
          <Text style={styles.organizer}>{title}</Text>
          <Text style={styles.eventName}>{description}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: image }}></Image>
        </View>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.dateLabel}>Inicio:</Text>
        <Text style={styles.date}>{start}</Text>
        <Text style={styles.dateLabel}>Final:</Text>
        <Text style={styles.date}>{end}</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.ubicationContainer}>
          <Text style={styles.locationText}>{location}</Text>
          <MaterialIcons name="location-pin" style={styles.locationIcon} />
        </View>
      </View>
    </View>
  );
};
export default EventCard;
