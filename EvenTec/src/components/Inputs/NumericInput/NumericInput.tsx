import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
// Styles
import { styles } from "./NumericInput.style";
// Interfaces
interface NumericInputProps {
  max?: number;
  min?: number;
  count: number;
  setCount: (count: number) => void;
  text?: string;
}

const NumericInput = ({
  max = Infinity,
  min = -Infinity,
  count,
  setCount,
  text,
}: NumericInputProps) => {
  const handleTextChange = (text: string) => {
    const newCount = parseInt(text, 10);
    if (isNaN(newCount)) {
      setCount(min);
    } else {
      setCount(Math.min(Math.max(newCount, min), max));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
      <View style={styles.inputsContainer}>
        <TouchableOpacity
          onPress={() => setCount(count > min ? count - 1 : count)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TextInput
          value={count.toString()}
          onChangeText={handleTextChange}
          style={styles.textInput}
          keyboardType="numeric"
        />
        <TouchableOpacity
          onPress={() => setCount(count < max ? count + 1 : count)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default NumericInput;
