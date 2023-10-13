// React
import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
// Styles
import { styles } from "./Members.style";
// Modal Context
import { useModal } from "../../../context/ModalContext";
// API
import { getMembers, addMember, deleteMember } from "../../../api/users/users";
// Components
import MemberCard from "../../../components/Cards/MemberCard/MemberCard";
import IconTextButton from "../../../components/Buttons/IconTextButton/IconTextButton";
import TextInput from "../../../components/Inputs/TextInput/TextInput";

const Members = () => {
  const [members, setMembers] = useState<any>([]);
  const [carne, setCarne] = useState<any>("");
  const { handleModal } = useModal();
  useEffect(() => {
    getOrganizationMembers();
  }, []);
  const getOrganizationMembers = async () => {
    const members = await getMembers();
    setMembers(members.data);
  };

  const addMemberToOrganization = async () => {
    const response = await addMember({ carne });
    handleModal({ ...response.data, code: response.status }, "fade");
    getOrganizationMembers();
  };
  const deleteMemberFromOrganization = async (carne: string) => {
    const response = await deleteMember({ carne: carne });
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
