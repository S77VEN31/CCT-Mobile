// React
import { View, Text, Image } from "react-native";
// Styles
import { styles } from "./EventCard.style";
// Components
import IconTextButton from "../../Buttons/IconTextButton/IconTextButton";

interface EventCardProps {
  organizer?: string;
  eventName?: string;
  image?: string;
}

const EventCard = ({ organizer, eventName, image }: EventCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTexts}>
          <Text style={styles.organizer}>{organizer}</Text>
          <Text style={styles.eventName}>{eventName}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: image }}></Image>
        </View>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>19-20-2023</Text>
      </View>
      <View style={styles.footer}>
        <IconTextButton text="Registrarse" />
        <View style={styles.ubicationContainer}>
          <IconTextButton
            icon="location-pin"
            className={styles.locationButton}
          />
          <Text style={styles.locationText}>Pretil</Text>
        </View>
      </View>
    </View>
  );
};
export default EventCard;
