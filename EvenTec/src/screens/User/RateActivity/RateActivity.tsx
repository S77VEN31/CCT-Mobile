// React
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View } from "react-native";
// Styles
import { styles } from "./RateActivity.style";
// Modal Context
import { useModal } from "../../../context/ModalContext";
// API
import { rateEventActivity } from "../../../api/events/events";
// Libraries
import { Rating } from "react-native-ratings";
// Components
import IconTextButton from "../../../components/Buttons/IconTextButton/IconTextButton";
import TextInput from "../../../components/Inputs/TextInput/TextInput";

const RateActivity = ({ route }: any) => {
  // Modal Context
  const { handleModal } = useModal();
  // Navigation
  const navigation = useNavigation();
  const { activityId } = route.params || {};
  const [rating, setRating] = useState(0);
  const [comment, setComments] = useState("");

  const sendRating = async () => {
    const response = await rateEventActivity({ rating, comment, activityId });
    if (response.status === 200) {
      handleModal({ ...response.data, code: response.status }, "fade");
      navigation.goBack();
    }
  };

  // Handle the rating change
  const handleRating = (rating: number) => {
    setRating(rating);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.rateTitle}>Danos tu opinión</Text>
      <View style={styles.rateContainer}>
        <Rating
          type="star"
          ratingCount={5}
          imageSize={60}
          startingValue={rating}
          onFinishRating={handleRating}
        />
      </View>
      <View>
        <TextInput
          title="Comentarios"
          placeholder="Agradecemos tu opinión sobre esta actividad"
          numberOfLines={10}
          onChangeText={(text) => setComments(text)}
        />
      </View>
      <IconTextButton
        text="Enviar"
        onPress={() => {
          sendRating();
        }}
      />
    </View>
  );
};
export default RateActivity;
