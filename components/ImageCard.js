import { Image } from "expo-image";
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { theme } from "../constants/theme";
import { getImageSize, wp } from "../helpers/common";

const ImageCard = ({ item, index, columns }) => {
  const isLastInRow = () => {
    return (index + 1) % columns === 0;
  };
  const getImageHeight = () => {
    let { imageHeight: height, imageWidth: width } = item;
    return {
      height: getImageSize(width, height),
    };
  };
  return (
    <Pressable style={[styles.imageWrapper, !isLastInRow() && styles.spacing]}>
      <Image
        style={[styles.image, getImageHeight()]}
        source={item?.webFormatURL}
        transition={100}
      />
    </Pressable>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  imageWrapper: {
    backgroundColor: theme.colors.grayBG,
    borderRadius: theme.radius.xl,
    borderCurve: "continuous",
    overflow: "hidden",
    marginBottom: wp(2),
  },
  image: {
    height: 300,
    width: "100%",
  },
  spacing: {
    marginRight: wp(2),
  },
});
