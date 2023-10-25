// React
import { Image, Text, View } from "react-native";
// Styles
import { styles } from "./OrganizationEventCard.style";
// Icons
import { MaterialIcons } from "@expo/vector-icons";
// Components
import IconTextButton from "../../Buttons/IconTextButton/IconTextButton";

interface EventCardProps {
  title?: string;
  image?: string;
  startTime?: string;
  endTime?: string;
  description?: string;
  location?: string;
}

const OrganizationEventCard = ({
  title,
  image,
  startTime,
  endTime,
  description,
  location,
}: EventCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTexts}>
          <Text style={styles.organizer}>{title}</Text>
          <Text style={styles.eventName}>{description}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: image }}></Image>
        </View>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>{startTime}</Text>
        <Text style={styles.date}>{endTime}</Text>
      </View>
      <View style={styles.footer}>
        <IconTextButton icon="edit" />
        <View style={styles.ubicationContainer}>
          <Text style={styles.locationText}>{location}</Text>
          <MaterialIcons name="location-pin" style={styles.locationIcon} />
        </View>
      </View>
    </View>
  );
};
export default OrganizationEventCard;
