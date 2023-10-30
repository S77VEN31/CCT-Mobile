// React
import { useNavigation } from "@react-navigation/native";
import { Image, Text, View } from "react-native";
// Styles
import { styles } from "./OrganizationEventCard.style";
// Icons
import { MaterialIcons } from "@expo/vector-icons";
// Modal Context
import { useModal } from "../../../context/ModalContext";
// Utils
import { handleDate } from "../../../utils/handleDate";
// API
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
  };
  onEventDelete: () => void;
}

const OrganizationEventCard = ({ event, onEventDelete }: EventCardProps) => {
  // Navigation
  const navigation = useNavigation();
  // Modal Context
  const { handleModal } = useModal();
  // Event props
  const { title, image, description, location, _id } = event;
  //  Date props
  const start = handleDate(event.startTime);
  const end = handleDate(event.endTime);
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
        <IconTextButton
          icon="edit"
          onPress={() => {
            // @ts-ignore
            navigation.navigate("EditEvent", { event: event });
          }}
        />
        <IconTextButton
          icon="delete"
          onPress={() => {
            handleDeleteEvent();
          }}
        />
        <View style={styles.ubicationContainer}>
          <Text style={styles.locationText}>{location}</Text>
          <MaterialIcons name="location-pin" style={styles.locationIcon} />
        </View>
      </View>
    </View>
  );
};
export default OrganizationEventCard;
