// React
import React from "react";
import { View, Text, Button } from "react-native";
// Styles
import { styles } from "./Wander.style";
// Navigation
import { useNavigation } from "@react-navigation/native";

const Wander: React.FC = () => {
  // Hook de navegación
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Wander puedes testear tus componentes aquí</Text>
      
      <Button
        title="Ir a Crear"
        onPress={() => navigation.navigate("Create" as never)} // Aquí utilizamos el objeto de navegación para navegar a la pantalla 'Create'
      />
    </View>
  );
};

export default Wander;
