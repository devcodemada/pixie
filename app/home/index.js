import { FontAwesome6 } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { apiCall } from "../../api/index";
import Categories from "../../components/Categories";
import ImageGrid from "../../components/ImageGrid";
import SearchInput from "../../components/SearchInput";
import { theme } from "../../constants/theme";
import { hp, wp } from "../../helpers/common";

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 10 : 30;
  const [activeCategory, setActiveCategory] = useState(null);

  const [images, setImages] = useState([]);

  const handleChangeCategory = (cat) => {
    setActiveCategory(cat);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async (params = { page: 1 }, append = false) => {
    let res = await apiCall(params);
    console.log("resultttt : ", res);
    if (res.success && res?.data?.hits) {
      if (append) {
        setImages([images, ...res.data.hits]);
      } else {
        setImages([...res.data.hits]);
      }
    }
    console.log("got result : ", res.data?.hits[0]);
  };

  return (
    <View style={[styles.container, { paddingTop }]}>
      <View style={styles.header}>
        <Pressable>
          <Text style={styles.title}>Pixie</Text>
        </Pressable>
        <Pressable>
          <FontAwesome6
            name="bars-staggered"
            size={24}
            color={theme.colors.neutral(0.7)}
          />
        </Pressable>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={{ gap: 15 }}>
        {/* Searchbar */}
        <SearchInput />

        {/* Categories */}
        <View style={styles.categories}>
          <Categories
            activeCategory={activeCategory}
            handleChangeCategory={handleChangeCategory}
          />
        </View>

        {/* masonry */}
        <View>{images.length > 0 && <ImageGrid images={images} />}</View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: wp(4),
  },
  title: {
    fontSize: hp(4),
    fontWeight: theme.fonts.semiBold,
    color: theme.colors.neutral(0.9),
  },
});
