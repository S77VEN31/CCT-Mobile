// React
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
// Styles
import { styles } from "./EventCard.style";
// Icons
import { MaterialIcons } from "@expo/vector-icons";
// Modal Context
import { useModal } from "../../../context/ModalContext";
// Utils
import { handleDate } from "../../../utils/handleDate";
// Buffer
const Buffer = require("buffer").Buffer;
// API
import { getEventCategory } from "../../../api/data/data";
import {
  joinUserToEvent,
  leaveUserFromEvent,
} from "../../../api/events/events";
import IconTextButton from "../../Buttons/IconTextButton/IconTextButton";
// Interfaces
interface EventCardProps {
  event: {
    _id: string;
    title?: string;
    owner?: any;
    startTime?: string;
    endTime?: string;
    description?: string;
    location?: string;
    category?: string;
    capacity?: number;
  };
  isJoined?: boolean;
  onLeave?: () => void;
}

const EventCard = ({ event, isJoined, onLeave }: EventCardProps) => {
  // Navigation
  const navigation = useNavigation();
  // Modal Context
  const { handleModal } = useModal();
  // Event props
  const { title, description, location, _id, category, capacity, owner } =
    event;
  // Date props
  const start = handleDate(event.startTime);
  const end = handleDate(event.endTime);
  // Join user to event
  const handleOnPress = async () => {
    let response = [];
    if (isJoined) {
      response = await leaveUserFromEvent({ eventId: _id });
      if (response.status === 200) {
        onLeave && onLeave();
      }
    } else {
      response = await joinUserToEvent({ eventId: _id });
    }
    handleModal({ ...response.data, code: response.status }, "fade");
  };
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
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.ownerName}>{owner.userName}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={{
              uri: `data:image/png;base64,${Buffer.from(
                owner.profilePicture
              ).toString("base64")}`,
            }}
          />
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
        </View>
        <View style={styles.footerDivision} />
        <View style={styles.buttonsContainer}>
          <IconTextButton
            className={styles.button}
            icon={isJoined ? "person-remove" : "person-add"}
            // @ts-ignore
            onPress={() => handleOnPress()}
          />
          <IconTextButton
            className={styles.button}
            icon={"event"}
            // @ts-ignore
            onPress={() => console.log("delete")}
          />
        </View>
      </View>
    </View>
  );
};
export default EventCard;
