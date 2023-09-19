// React
import { View, Text } from "react-native";
// Styles
import { styles } from "./Menu.style";
// Components
import EventCard from "../../components/Cards/EventCard/EventCard";

const Menu: React.FC = () => {
  return (
    <View>
      <EventCard 
      eventName="Concierto" 
      organizer="ASODEC" 
      image="https://picsum.photos/id/237/300/300" />
    </View>
  )
};
export default Menu;
