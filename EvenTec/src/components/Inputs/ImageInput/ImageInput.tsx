// React
import React from "react";
import { Image, Pressable, View } from "react-native";
// Styles
import { styles } from "./ImageInput.style";
// Components
import IconTextButton from "../../Buttons/IconTextButton/IconTextButton";
// Buffer
const Buffer = require("buffer").Buffer;
// Interfaces
interface ImageInputProps {
  onPress: () => void;
  data: any;
}

const ImageInput = ({ onPress, data }: ImageInputProps) => {
  return (
    <View style={styles.setImageContainer}>
      <View style={styles.imageContainer}>
        <Pressable style={styles.imageButton} onPress={onPress}>
          <Image
            source={
              data.profilePicture !== ""
                ? {
                    uri: `data:image/png;base64,${Buffer.from(
                      data.profilePicture
                    ).toString("base64")}`,
                  }
                : require("../../../../assets/images/edit-image.png")
            }
            style={styles.image}
          />
        </Pressable>
      </View>
      <IconTextButton
        className={styles.button}
        text="Pick a profile picture"
        onPress={onPress}
      />
    </View>
  );
};
export default ImageInput;
