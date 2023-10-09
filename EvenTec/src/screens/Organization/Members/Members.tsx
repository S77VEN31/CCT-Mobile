import { View, Text } from "react-native";
import React from "react";
import { useAuth } from "../../../context/AuthContext";
import IconTextButton from "../../../components/Buttons/IconTextButton/IconTextButton";
import { getMembers } from "../../../api/users/users";
import { useEffect, useState } from "react";
import MemberCard from "../../../components/Cards/MemberCard/MemberCard";
const Members = () => {
  const [members, setMembers] = useState<any>([]);
  useEffect(() => {
    getOrganizationMembers();
  }, []);
  const getOrganizationMembers = async () => {
    const members = await getMembers();
    setMembers(members.data);
  };

  const { onLogout } = useAuth();
  return (
    <View>
      {members.map((member: any, key: number) => {
        return <MemberCard {...member} key={key} />;
      })}
      <IconTextButton text="logout" onPress={() => onLogout()} />
      <IconTextButton text="members" onPress={() => getOrganizationMembers()} />
    </View>
  );
};
export default Members;
