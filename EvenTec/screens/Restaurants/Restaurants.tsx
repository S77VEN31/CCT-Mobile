// React
import { View, ScrollView } from "react-native";
// Styles
import { styles } from "./Restaurants.style";
// Enumerables
import { RestaurantsConstants } from "../../constants/screens/RestaurantsConstants/RestaurantsConstants";
// Components
import RestaurantCard from "../../components/Cards/RestaurantCard/RestaurantCard";

const Restaurants: React.FC = () => {
  const { restaurants } = RestaurantsConstants;
  return (
    <ScrollView>
      <View style={styles.container}>
        {restaurants.map(({ ...props }, key) => {
          return <RestaurantCard key={key} {...props} />;
        })}
      </View>
    </ScrollView>
  );
};
export default Restaurants;
