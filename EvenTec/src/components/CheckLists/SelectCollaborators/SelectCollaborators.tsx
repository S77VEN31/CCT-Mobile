// React
import React from "react";
import { FlatList, ListRenderItemInfo, Text, View } from "react-native";
// Styles
import { styles } from "./SelectCollaborators.style";
// Libraries
import { Checkbox } from "react-native-paper";
// Types
type member = {
  id: string;
  name: string;
};
// Interfaces
interface SelectCollaboratorsProps {
  members: member[];
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

  const renderCollaborator = ({ item }: ListRenderItemInfo<member>) => (
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
        color={styles.checkboxSelected.color} // Checkbox color when selected/checked
      />
    </View>
  );

  return (
    <FlatList<member>
      style={styles.collaboratorsList}
      data={members}
      renderItem={renderCollaborator}
      keyExtractor={(item) => item.id}
    />
  );
};
export default SelectCollaborators;
