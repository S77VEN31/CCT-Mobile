// React
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { ScrollView, Text, View } from "react-native";
// Styles
import { styles } from "./HandleEvents.style";
// API
import { getOrganizationEvents } from "../../../api/events/events";
// Components
import IconTextButton from "../../../components/Buttons/IconTextButton/IconTextButton";
import EventCard from "../../../components/Cards/EventCard/EventCard";

const HandleEvents = () => {
  // Navigation
  const navigation = useNavigation();
  // Inputs states
  const [events, setEvents] = useState([]);

  const getMembersFromOrganization = async () => {
    const response = await getOrganizationEvents();
    setEvents(response.data);
  };
  useFocusEffect(
    useCallback(() => {
      getMembersFromOrganization();
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.addEvent}>
        <IconTextButton
          text="Agregar Evento"
          onPress={() => {
            navigation.navigate("CreateEvent" as never);
          }}
        />
      </View>
      {events.length > 0 ? (
        <ScrollView contentContainerStyle={styles.eventsContainer}>
          {events.map((event: any, key: number) => {
            return <EventCard {...event} key={key} />;
          })}
        </ScrollView>
      ) : (
        <View style={styles.noContent}>
          <Text style={styles.noContentText}>
            No tienes eventos registrados
          </Text>
        </View>
      )}
    </View>
  );
};
export default HandleEvents;
