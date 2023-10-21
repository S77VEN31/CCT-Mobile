// React
import { useState } from "react";
// React Native
import {
  useNavigation,
  useNavigationState,
  useRoute,
} from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";
// Styles
import { styles } from "./MainNavBar.style";
// Icons
import { MaterialIcons } from "@expo/vector-icons";

const MainNavBar: React.FC = ({ data, initialRoute }: any) => {
  const navigation = useNavigation();
  const [screen, setScreen] = useState(initialRoute);
  const route = useRoute();
  const state = useNavigationState((state) => state);
  const history = state.routes[0].state?.history;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.barContainer}>
        {data.map((item: any, key: number) => {
          const screenName = item.name;
          return (
            <Pressable
              style={styles.button}
              onPress={() => {
                navigation.navigate(screenName as never);
                setScreen(screenName);
              }}
              key={key}
            >
              <View>
                <MaterialIcons
                  // @ts-ignore
                  name={item.icon}
                  size={30}
                  style={
                    screen === screenName
                      ? styles.buttonActive
                      : styles.buttonInactive
                  }
                />
              </View>
              <Text
                style={[
                  styles.buttonText,
                  screen === screenName
                    ? styles.buttonActive
                    : styles.buttonInactive,
                ]}
              >
                {item.text}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};
export default MainNavBar;
