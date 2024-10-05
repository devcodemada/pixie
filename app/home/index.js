import { FontAwesome6 } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Categories from "../../components/Categories";
import SearchInput from "../../components/SearchInput";
import { theme } from "../../constants/theme";
import { hp, wp } from "../../helpers/common";

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 10 : 30;
  const [activeCategory, setActiveCategory] = useState(null);

  const handleChangeCategory = (cat) => {
    setActiveCategory(cat);
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
