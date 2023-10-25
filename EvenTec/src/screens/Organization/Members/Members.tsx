// React
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
// Styles
import { styles } from "./Members.style";
// Modal Context
import { useModal } from "../../../context/ModalContext";
// API
import {
  addOrganizationMember,
  deleteOrganizationMember,
  getOrganizationMembers,
} from "../../../api/users/users";
// Components
import IconTextButton from "../../../components/Buttons/IconTextButton/IconTextButton";
import MemberCard from "../../../components/Cards/MemberCard/MemberCard";
import TextInput from "../../../components/Inputs/TextInput/TextInput";

const Members = () => {
  // Modal Context
  const { handleModal } = useModal();
  // Inputs states
  const [members, setMembers] = useState<any>([]);
  const [carne, setCarne] = useState<any>("");

  const getMembersFromOrganization = async () => {
    const members = await getOrganizationMembers();
    setMembers(members.data);
  };
  useEffect(() => {
    getMembersFromOrganization();
  }, []);

  const addMemberToOrganization = async () => {
    const response = await addOrganizationMember({ carne });
    handleModal({ ...response.data, code: response.status }, "fade");
    getOrganizationMembers();
  };
  const deleteMemberFromOrganization = async (carne: string) => {
    const response = await deleteOrganizationMember({ carne: carne });
    handleModal({ ...response.data, code: response.status }, "fade");
    getOrganizationMembers();
  };

  return (
    <View style={styles.container}>
      <View style={styles.addMember}>
        <TextInput
          placeholder="##########"
          title="Carné del miembro"
          value={carne}
          onChangeText={(text) => setCarne(text)}
        />
        <IconTextButton
          text="Agregar miembro"
          onPress={() => {
            addMemberToOrganization();
            setCarne("");
          }}
        />
      </View>
      {members.length > 0 ? (
        <ScrollView contentContainerStyle={styles.membersContainer}>
          {members.map((member: any, key: number) => {
            return (
              <MemberCard
                handleDelete={deleteMemberFromOrganization}
                {...member}
                key={key}
              />
            );
          })}
        </ScrollView>
      ) : (
        <View style={styles.noContent}>
          <Text style={styles.noContentText}>
            Esta asociación no cuenta con miembros aún
          </Text>
        </View>
      )}
    </View>
  );
};
export default Members;
