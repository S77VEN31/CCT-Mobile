// React
import { View, Text, Image } from "react-native";
// Styles
import { styles } from "./MemberCard.style";
// Components
import IconTextButton from "../../Buttons/IconTextButton/IconTextButton";
// Buffer
const Buffer = require("buffer").Buffer;
// Interfaces
interface EventCardProps {
  name?: string;
  phone?: string;
  profilePicture?: string;
}

const MemberCard = ({ phone, name, profilePicture }: EventCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTexts}>
          <Text style={styles.organizer}>{phone}</Text>
          <Text style={styles.eventName}>{name}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: `data:image/png;base64,${Buffer.from(
                profilePicture
              ).toString("base64")}`,
            }}
          ></Image>
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
export default MemberCard;
