// React
import { View, Text } from "react-native";
// Styles
import { styles } from "./Menu.style";
// Components
import EventCard from "../../components/Cards/EventCard/EventCard";
import IconTextButton from "../../components/Buttons/IconTextButton/IconTextButton";
import { useAuth } from "../../context/AuthContext";
const Menu: React.FC = () => {
  const { onLogout } = useAuth();
  return (
    <View>
      <EventCard
        eventName="Concierto"
        organizer="ASODEC"
        image="https://picsum.photos/id/237/300/300"
      />
      <IconTextButton
        text="Logout"
        onPress={() => {
          onLogout();
        }}
      />
    </View>
  );
};
export default Menu;
