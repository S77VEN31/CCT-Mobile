// React
import { Image, Text, View } from "react-native";
// Styles
import { styles } from "./MemberCard.style";
// Buffer
const Buffer = require("buffer").Buffer;
// Components
import IconTextButton from "../../Buttons/IconTextButton/IconTextButton";
// Interfaces

interface EventCardProps {
  name?: string;
  phone?: string;
  profilePicture?: string;
  carne?: string;
  description?: string;
  email?: string;
  handleDelete?: () => void;
}

const MemberCard = ({
  phone,
  name,
  profilePicture,
  carne,
  description,
  email,
  handleDelete,
}: EventCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTexts}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.content}>
            <Text style={styles.subtitle}>Carné:</Text> {carne}
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: `data:image/png;base64,${Buffer.from(
                profilePicture
              ).toString("base64")}`,
            }}
          />
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.footer}>
        <View>
          <View>
            <Text style={styles.subtitle}>Teléfono: </Text>
            <Text style={styles.content}>{phone}</Text>
          </View>
          <View>
            <Text style={styles.subtitle}>Correo: </Text>
            <Text style={styles.content}>{email}</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <IconTextButton
            icon={"delete"}
            // @ts-ignore
            onPress={() => handleDelete(carne)}
          />
        </View>
      </View>
    </View>
  );
};
export default MemberCard;
