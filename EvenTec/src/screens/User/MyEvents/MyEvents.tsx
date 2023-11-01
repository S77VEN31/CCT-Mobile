// React
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { ScrollView, Text, View } from "react-native";
// Styles
import { styles } from "./MyEvents.style";
// API
import { getUserEvents } from "../../../api/events/events";
// Components
import EventCard from "../../../components/Cards/EventCard/EventCard";

const MyEvents = () => {
  // Navigation
  const navigation = useNavigation();
  // Inputs states
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    const response = await getUserEvents();
    setEvents(response.data);
  };

  useFocusEffect(
    useCallback(() => {
      getEvents();
    }, [])
  );

  return (
    <View style={styles.container}>
      {events.length > 0 ? (
        <ScrollView contentContainerStyle={styles.eventsContainer}>
          {events.map((event: any, key: number) => {
            return (
              <EventCard isJoined event={event} key={key} onLeave={getEvents} />
            );
          })}
        </ScrollView>
      ) : (
        <View style={styles.noContent}>
          <Text style={styles.noContentText}>
            No estas inscrito en ningun evento
          </Text>
        </View>
      )}
    </View>
  );
};
export default MyEvents;
