// React
import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { ScrollView, Text, View } from "react-native";
// Styles
import { styles } from "./OrganizationNotifications.style";
// API
import { getProposals } from "../../../api/proposals/proposals";
import ProposalCard from "../../../components/Cards/ProposalCard/ProposalCard";

const OrganizationNotifications = () => {
  const [proposals, setProposals] = useState<any>([]); // [1
  const handleGetProposals = async () => {
    const response = await getProposals();
    setProposals(response.data);
  };
  useFocusEffect(
    useCallback(() => {
      handleGetProposals();
    }, [])
  );
  return (
    <View style={styles.container}>
      {proposals.length > 0 ? (
        <ScrollView contentContainerStyle={styles.proposalsContainer}>
          <Text style={styles.proposalsTitle}>Propuestas</Text>
          {proposals.map((proposal: any, key: number) => {
            return <ProposalCard {...proposal} key={key} />;
          })}
        </ScrollView>
      ) : (
        <View style={styles.noContent}>
          <Text style={styles.noContentText}>No hay propuestas</Text>
        </View>
      )}
    </View>
  );
};
export default OrganizationNotifications;
