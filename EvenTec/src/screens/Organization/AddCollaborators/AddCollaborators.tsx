import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
// Styles
import { styles } from "./AddCollaborators.style";
// Modal Context
import { useModal } from "../../../context/ModalContext";
// API
import { updateCollaboratorsEventList } from "../../../api/events/events";
import { getOrganizationMembers } from "../../../api/users/users";
// Components
import IconTextButton from "../../../components/Buttons/IconTextButton/IconTextButton";
import SelectCollaborators from "../../../components/CheckLists/SelectCollaborators/SelectCollaborators";

// Make sure to receive the `route` prop
const AddCollaborators = ({ route }: any) => {
  // Modal Context
  const { handleModal } = useModal();
  // Access parameters from the route
  const { collaborators, maxSelectable, eventId } = route.params || {};
  const [selectedCollaborators, setSelectedCollaborators] =
    useState<string[]>(collaborators);
  const [members, setMembers] = useState<any>([]);
  const [membersList, setMembersList] = useState<any>([]); // [{id: 1, name: "Alice"}, {id: 2, name: "Bob"}

  const handleUpdateCollaborators = async () => {
    const response = await updateCollaboratorsEventList({
      eventId: eventId,
      collaborators: selectedCollaborators,
    });
    handleModal({ ...response.data, code: response.status }, "fade");
  };

  const getMembers = async () => {
    const response = await getOrganizationMembers();
    setMembers(response.data);
  };

  const processMembers = () => {
    const collaboratorsList = members.map((collaborator: any) => {
      return {
        id: collaborator._id,
        name: collaborator.name,
      };
    });
    setMembersList(collaboratorsList);
  };

  useEffect(() => {
    getMembers();
  }, []);

  useEffect(() => {
    processMembers();
  }, [members]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seleccione los colaboradores</Text>
      <SelectCollaborators
        selectedCollaborators={selectedCollaborators}
        setSelectedCollaborators={setSelectedCollaborators}
        members={membersList}
        maxSelectable={maxSelectable}
      />
      <IconTextButton
        text="Asignar Colaboradores"
        onPress={() => {
          handleUpdateCollaborators();
        }}
      />
    </View>
  );
};

export default AddCollaborators;
