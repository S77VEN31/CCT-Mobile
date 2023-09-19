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

const EventCard = (props: EventCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTexts}>
          <Text style={styles.organizer}>{props.organizer}</Text>
          <Text style={styles.eventName}>{props.eventName}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.image }}></Image>
        </View>
      </View>

      <IconTextButton icon="badge" text="Registrarse" />
    </View>
  );
};
export default EventCard;
