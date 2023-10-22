// React
import React, { useState } from "react";
import { View } from "react-native";
// Components
import DateTimePicker from "@react-native-community/datetimepicker";
import IconTextButton from "../../Buttons/IconTextButton/IconTextButton";
// Styles
import { styles } from "./DateTimeInput.style";
// Types
import { DateTypes } from "../../../constants/Types";
// Interface
interface DateTimeInputProps {
  mode: DateTypes;
  dateTime: Date;
  setDatetime: (date: Date) => void;
}

const DateTimeInput = ({ mode, dateTime, setDatetime }: DateTimeInputProps) => {
  const [show, setShow] = useState<boolean>(false);
  const onChange = (event: any, selectedDate: any) => {
    // Dont delete event parameter, it is needed
    const currentDate = selectedDate;
    setShow(false);
    setDatetime(currentDate);
  };
  return (
    <View>
      <IconTextButton
        className={styles.button}
        onPress={() => {
          setShow(true);
        }}
        text={mode === "date" ? "Seleccionar Fecha" : "Seleccionar Hora"}
      />
      {show && (
        <DateTimePicker
          value={dateTime}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  );
};
export default DateTimeInput;
