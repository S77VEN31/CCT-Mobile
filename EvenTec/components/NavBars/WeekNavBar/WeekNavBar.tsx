// React Native
import { Text, View, Pressable } from "react-native";
// Styles
import { styles } from "./WeekNavBar.style";
// Globals
import { getCurrentDay } from "../../../globals/handleDays/getCurrentDay";
// Constants
import { General } from "../../../constants/General";

type WeekNavBarProps = {
  day: string;
  setDay: (newDay: string) => void;
};

const WeekNavBar: React.FC<WeekNavBarProps> = ({ day, setDay }) => {
  const { daysOfWeek } = General;
  const currentDay = getCurrentDay();
  return (
    <View style={styles.barContainer}>
      {daysOfWeek.map((item, key) => {
        return (
          <Pressable
            style={styles.button}
            onPress={() => {
              setDay(item);
            }}
            key={key}
          >
            <Text style={[styles.text, item === day && styles.currentDayText]}>
              {item[0]}
            </Text>
            {item === currentDay && item !== day && (
              <View style={styles.currentDayDot} />
            )}
          </Pressable>
        );
      })}
    </View>
  );
};
export default WeekNavBar;
