// React
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";
// React Native
import { Text, View, Dimensions, Pressable } from "react-native";
// Styles
import { styles } from "./Menu.style";
// Icons
import { MaterialIcons } from "@expo/vector-icons";
// Globals
import { getMenuByDay } from "../../globals/handleMenus/getMenuByDay";
import { getCurrentDay } from "../../globals/handleDays/getCurrentDay";
// Components
import Carousel from "react-native-reanimated-carousel";
import DailyMenuCard from "../../components/Cards/DailyMenuCard/DailyMenuCard";
import WeekNavBar from "../../components/NavBars/WeekNavBar/WeekNavBar";

type YourStackParamList = {
  ScreenName: { restaurantId: number }; // Adjust the type accordingly
};
type MenuProps = {
  route: RouteProp<YourStackParamList, "ScreenName">;
};

const Menu: React.FC<MenuProps> = ({ route }) => {
  const { restaurantId } = route.params;
  const navigation = useNavigation();
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const [day, setDay] = useState(getCurrentDay());
  const [menuForGivenDay, setMenuForGivenDay] = useState(
    getMenuByDay(day, restaurantId)
  );
  useEffect(() => {
    const updatedMenu = getMenuByDay(day, restaurantId);
    setMenuForGivenDay(updatedMenu);
  }, [day]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainHeader}>
        <View style={styles.mainTitleContent}>
          <Pressable
            style={styles.goBackButton}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <MaterialIcons name="arrow-back" style={styles.goBackIcon} />
          </Pressable>
          <Text style={styles.mainTitle}>{day}</Text>
        </View>
        <WeekNavBar day={day} setDay={setDay} />
      </View>
      {menuForGivenDay === null ? (
        <View style={styles.menuNull}>
          <Text style={styles.menuNullText}>
            No hay menu para el dia de hoy
          </Text>
        </View>
      ) : (
        <View style={styles.carrouselContainer}>
          <Carousel
            pagingEnabled={false}
            loop
            autoFillData={true}
            autoPlay={true}
            mode="parallax"
            modeConfig={{
              parallaxScrollingOffset: height / 4,
              parallaxScrollingScale: 0.9,
              parallaxAdjacentItemScale: 0.7,
            }}
            vertical={true}
            width={width}
            style={styles.carrousel}
            height={height / 2}
            data={[...menuForGivenDay.menus, ...menuForGivenDay.menus]}
            scrollAnimationDuration={5000}
            renderItem={({ item }) => (
              <DailyMenuCard time={item.time} menu={item.menu} />
            )}
            //onSnapToItem={(index) => console.log("current index:", height)}
          />
        </View>
      )}
    </View>
  );
};
export default Menu;
