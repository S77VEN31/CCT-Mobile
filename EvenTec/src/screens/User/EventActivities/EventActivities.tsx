// React
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
// Styles
import { styles } from "./EventActivities.style";
// API
import { getEventActivities } from "../../../api/events/events";
// Components
import IconTextButton from "../../../components/Buttons/IconTextButton/IconTextButton";
import ActivityCard from "../../../components/Cards/ActivityCard/ActivityCard";

const EventActivities = ({ route }: any) => {
  // Navigation
  const navigation = useNavigation();
  const { eventId, isJoined } = route.params || {};
  const [activities, setActivities] = useState<any>([]);
  const handleGetActivities = async () => {
    const response = await getEventActivities(eventId);
    setActivities(response.data);
  };

  useEffect(() => {
    handleGetActivities();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.activitiesTitle}>EventActivities</Text>
      {activities.length > 0 ? (
        <ScrollView contentContainerStyle={styles.activitiesContainer}>
          {activities.map((activity: any, key: number) => {
            return (
              <ActivityCard
                isJoined={!isJoined}
                activity={activity}
                key={key}
              />
            );
          })}
        </ScrollView>
      ) : (
        <View style={styles.noContent}>
          <Text style={styles.noContentText}>No hay actividades</Text>
        </View>
      )}
      <View style={styles.buttonContainer}>
        <IconTextButton
          text="Volver"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </View>
  );
};
export default EventActivities;
