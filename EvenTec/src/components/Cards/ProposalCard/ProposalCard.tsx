// React
import React from "react";
import { Image, Text, View } from "react-native";
// Styles
import { styles } from "./ProposalCard.style";
// Buffer
const Buffer = require("buffer").Buffer;
// Interfaces
interface ProposalCardProps {
  title: string;
  description: string;
  proposer: any;
}

const ProposalCard = ({ title, description, proposer }: ProposalCardProps) => {
  const { name, profilePicture } = proposer;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTexts}>
          <Text style={styles.content}>
            <Text style={styles.subtitle}>Estudiante: </Text> {name}
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
      <Text style={styles.title}>{title}</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};
export default ProposalCard;
