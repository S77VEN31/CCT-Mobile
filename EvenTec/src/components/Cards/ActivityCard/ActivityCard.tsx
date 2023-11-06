// React
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
// Styles
import { styles } from "./ActivityCard.style";
// Icons
import { MaterialIcons } from "@expo/vector-icons";
// Modal Context
// Utils
import { handleDate } from "../../../utils/handleDate";
// Buffer
const Buffer = require("buffer").Buffer;
// API
import IconTextButton from "../../Buttons/IconTextButton/IconTextButton";
// Interfaces
type ActivityCard = {
  title?: string;
  description?: string;
  location?: string;
  _id?: string;
  startTime?: string;
  endTime?: string;
  collaborator?: any;
};

interface ActivityCardProps {
  activity: ActivityCard;
  isJoined: boolean;
}

const ActivityCard = ({ activity, isJoined }: ActivityCardProps) => {
  const {
    title,
    description,
    location,
    _id,
    startTime,
    endTime,
    collaborator,
  } = activity;
  // Navigation
  const navigation = useNavigation();
  // Handle the date
  const start = handleDate(startTime);
  const end = handleDate(endTime);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTexts}>
          <Text style={styles.titleText}>{title}</Text>
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
          {!isJoined ? (
            <IconTextButton
              className={styles.button}
              icon={"rate-review"}
              onPress={() =>
                // @ts-ignore
                navigation.navigate("RateActivity", { activityId: _id })
              }
            />
          ) : null}
          <View style={styles.iconTextContainer}>
            <MaterialIcons name="location-pin" style={styles.icon} />
            <Text style={styles.iconText}>{location}</Text>
          </View>
          <View style={styles.iconTextContainer}>
            <MaterialIcons name="people" style={styles.icon} />
            <Text style={styles.iconText}>
              Responsable: {collaborator.name}{" "}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default ActivityCard;
