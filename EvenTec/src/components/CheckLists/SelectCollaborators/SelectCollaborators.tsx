// React
import React from "react";
import { FlatList, ListRenderItemInfo, Text, View } from "react-native";
// Styles
import { styles } from "./SelectCollaborators.style";
// Libraries
import { Checkbox } from "react-native-paper";
// Types
type Member = {
  id: string;
  name: string;
};
// Interfaces
interface SelectCollaboratorsProps {
  members: Member[];
  maxSelectable: number;
  selectedCollaborators: string[];
  setSelectedCollaborators: (selectedCollaborators: string[]) => void;
}

const SelectCollaborators = ({
  members,
  maxSelectable,
  selectedCollaborators,
  setSelectedCollaborators,
}: SelectCollaboratorsProps) => {
  // Filter out any members that are undefined or do not have an 'id' property
  const validMembers = members.filter(
    (member) => member && typeof member.id !== "undefined"
  );

  const handleSelectCollaborator = (
    collaboratorId: string,
    isSelected: boolean
  ) => {
    if (isSelected) {
      if (selectedCollaborators.length < maxSelectable) {
        setSelectedCollaborators([...selectedCollaborators, collaboratorId]);
      }
    } else {
      setSelectedCollaborators(
        selectedCollaborators.filter((id) => id !== collaboratorId)
      );
    }
  };

  const renderCollaborator = ({ item }: ListRenderItemInfo<Member>) => (
    <View style={styles.collaboratorItem}>
      <Text style={styles.collaboratorText}>{item.name}</Text>
      <Checkbox
        status={
          selectedCollaborators.includes(item.id) ? "checked" : "unchecked"
        }
        onPress={() =>
          handleSelectCollaborator(
            item.id,
            !selectedCollaborators.includes(item.id)
          )
        }
        disabled={
          !selectedCollaborators.includes(item.id) &&
          selectedCollaborators.length >= maxSelectable
        }
        color={styles.checkboxSelected.color} // Assuming styles.checkboxSelected.color is defined in your styles
      />
    </View>
  );

  return (
    <FlatList<Member>
      style={styles.collaboratorsList}
      data={validMembers} // Use validMembers here
      renderItem={renderCollaborator}
      keyExtractor={(item) => item.id}
      extraData={selectedCollaborators}
    />
  );
};

export default SelectCollaborators;
