// React
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { ScrollView, Text, View } from "react-native";
// Styles
import { styles } from "./GetEvents.style";
// API
import { getAllEvents } from "../../../api/events/events";
// Components
import EventCard from "../../../components/Cards/EventCard/EventCard";

const GetEvents = () => {
  // Navigation
  const navigation = useNavigation();
  // Inputs states
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    const response = await getAllEvents();
    setEvents(response.data);
    console.log(response.data);
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
            return <EventCard event={event} key={key} />;
          })}
        </ScrollView>
      ) : (
        <View style={styles.noContent}>
          <Text style={styles.noContentText}>No hay eventos disponibles</Text>
        </View>
      )}
    </View>
  );
};
export default GetEvents;
