// React
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
// Styles
import { styles } from "./MyEvents.style";
// API
import {
  getUserEvents,
  getUserEventsAttendanceRequest,
} from "../../../api/events/events";
// Components
import EventCard from "../../../components/Cards/EventCard/EventCard";

const MyEvents = () => {
  // Navigation
  const navigation = useNavigation();
  // Inputs states
  const [events, setEvents] = useState([]);
  const [pendingEvents, setPendingEvents] = useState([]);

  const getEvents = async () => {
    const response = await getUserEvents();
    setEvents(response.data);
  };

  const getPendingEvents = async () => {
    const response = await getUserEventsAttendanceRequest();
    setPendingEvents(response.data);
  };

  useEffect(() => {
    console.log("pendingEvents", pendingEvents);
  }, [pendingEvents]);

  useFocusEffect(
    useCallback(() => {
      getEvents();
      getPendingEvents();
    }, [])
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.eventsContainer}>
        {events.length > 0 ? (
          <View>
            <Text style={styles.eventsTitle}>Eventos inscritos</Text>
            {events.map((event: any, key: number) => {
              return (
                <EventCard
                  isJoined
                  event={event}
                  key={key}
                  onLeave={getEvents}
                />
              );
            })}
          </View>
        ) : (
          <View style={styles.noContent}>
            <Text style={styles.noContentText}>
              No estas inscrito en ningun evento
            </Text>
          </View>
        )}

        {pendingEvents.length > 0 ? (
          <View>
            <Text style={styles.pendingTitle}>Eventos pendientes</Text>
            {pendingEvents.map((event: any, key: number) => {
              return (
                <EventCard event={event} key={key} onLeave={getPendingEvents} />
              );
            })}
          </View>
        ) : (
          <View style={styles.noContent}>
            <Text style={styles.noContentText}>
              No estas inscrito en ningun evento
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};
export default MyEvents;
