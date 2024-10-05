import { MasonryFlashList } from "@shopify/flash-list";
import React from "react";
import { StyleSheet, View } from "react-native";
import { getColumnCount, wp } from "../helpers/common";
import ImageCard from "./ImageCard";

const ImageGrid = ({ images }) => {
  const columns = getColumnCount();
  return (
    <View style={styles.container}>
      <MasonryFlashList
        data={images}
        numColumns={columns}
        renderItem={({ item, index }) => (
          <ImageCard item={item} columns={columns} index={index} />
        )}
        estimatedItemSize={200}
      />
    </View>
  );
};

export default ImageGrid;

const styles = StyleSheet.create({
  container: {
    minHeight: 3,
    width: wp(100),
  },
});
