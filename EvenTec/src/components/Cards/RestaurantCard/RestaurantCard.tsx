// React
import {
  View,
  Dimensions,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
// Styles
import { styles } from "./RestaurantCard.style";
// Icons
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
// Components
import Carousel from "react-native-reanimated-carousel";
import MapView, { Marker } from "react-native-maps";

type RestaurantData = {
  name: string;
  state: boolean;
  schedule: string;
  images: string[];
  id: number;
  latitude: number;
  longitude: number;
};

const RestaurantCard: React.FC<RestaurantData> = ({
  images,
  name,
  state,
  schedule,
  id,
  latitude,
  longitude,
}) => {
  const navigation = useNavigation();
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const [showMap, setShowMap] = useState(false);
  const goToMenu = () => {
    (
      navigation.navigate as (
        screen: string,
        params: { restaurantId: number }
      ) => void
    )("Menu", { restaurantId: id });
  };
  const [origin, setOrigin] = useState({
    latitude: latitude,
    longitude: longitude,
  });
  return (
    <View style={styles.mainContainer}>
      {showMap ? (
        <View>
          <MapView
            style={[{ width: width - 80, height: height / 4 }, styles.map]}
            initialRegion={{
              latitude: origin.latitude,
              longitude: origin.longitude,
              latitudeDelta: 0.0009,
              longitudeDelta: 0.04,
            }}
            //showsUserLocation={true}  //Test
            // followsUserLocation={true} // if the user is walking the map will move.
          >
            <Marker
              //draggable   //Test
              coordinate={origin}
              // onDragEnd={(direction) =>    //Test
              //   setOrigin(direction.nativeEvent.coordinate)    //Test
              // }
              // title="My car" // when the user click shows a title    //Test
              // description="This is my car" // when the user click shows a descripcion   
            />
          </MapView>
        </View>
      ) : (
        <Carousel
          style={styles.carousel}
          autoPlay={true}
          data={images}
          width={width - 80}
          height={height / 4}
          renderItem={({ item }) => (
            <ImageBackground
              style={[{ minWidth: width - 80 }, styles.carouselImage]}
              //@ts-ignore
              source={item}
              resizeMode="cover"
            />
          )}
        />
      )}
      <View style={styles.restaurantData}>
        <View style={styles.restaurantInfo}>
          <Text style={styles.restaurantName}>{name}</Text>
          <Text style={state ? styles.open : styles.closed}>
            {state ? "Abierto" : "Cerrado"}
          </Text>
          <Text>{schedule}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Pressable
            onPress={() => {
              setShowMap(!showMap);
            }}
            style={styles.button}
          >
            {showMap ? (
              <FontAwesome name="photo" style={styles.buttonText} />
            ) : (
              <Ionicons name="location-outline" style={styles.buttonText} />
            )}
          </Pressable>
          <Pressable onPress={() => goToMenu()} style={styles.button}>
            <Entypo name="dots-three-vertical" style={styles.buttonText} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};
export default RestaurantCard;
