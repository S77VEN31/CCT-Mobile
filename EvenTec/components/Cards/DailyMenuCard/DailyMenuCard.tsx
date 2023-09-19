// React Native
import { Text, View, ImageBackground } from "react-native";
// Styles
import { styles } from "./DailyMenuCard.style";

type AllowedTimes = "day" | "night" | "afternoon" | "morning";
type MenuItem = {
  name: string;
  price: string;
};
type DailyMenuCardProps = {
  time: AllowedTimes | string;
  menu: MenuItem[];
};

const DailyMenuCard: React.FC<DailyMenuCardProps> = ({ time, menu }) => {
  const images = {
    noon: require("../../../assets/images/png/noon.png"),
    night: require("../../../assets/images/png/night.png"),
    afternoon: require("../../../assets/images/png/afternoon.png"),
    morning: require("../../../assets/images/png/morning.png"),
  };
  const menuMap = menu.reduce(
    (result, item, key) => {
      result.menus.push(
        <Text key={key} style={styles.menusText}>
          {item.name}
        </Text>
      );
      result.prices.push(
        <Text key={key} style={styles.pricesText}>
          {item.price}
        </Text>
      );
      return result;
    },
    { menus: [], prices: [] }
  );
  return (
    <ImageBackground
      style={styles.mainContainer}
      source={images[time]}
      resizeMode="stretch"
    >
      <View style={styles.infoContainer}>
        <View style={styles.menusPrices}>
          <View style={styles.titlesInfo}>
            <Text style={styles.titlesText}>Menu {time}</Text>
            <View style={styles.textContainer}>{menuMap.menus}</View>
          </View>
          <View style={styles.titlesInfo}>
            <Text style={styles.titlesText}>Price</Text>
            <View style={styles.textContainer}>{menuMap.prices}</View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
export default DailyMenuCard;
