import { Feather, Ionicons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { theme } from "../constants/theme";
import { hp, wp } from "../helpers/common";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const searchInputRef = useRef(null);
  return (
    <View style={styles.searchBar}>
      <View style={styles.searchIcon}>
        <Feather name="search" size={24} color={theme.colors.neutral(0.4)} />
      </View>
      <TextInput
        placeholder="Search for photos..."
        style={styles.searchInput}
        ref={searchInputRef}
        onChangeText={(value) => {
          setSearch(value);
        }}
      />
      {search && (
        <Pressable style={styles.closeIcon}>
          <Ionicons name="close" size={24} color={theme.colors.neutral(0.6)} />
        </Pressable>
      )}
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.colors.grayBG,
    borderRadius: theme.radius.lg,
    backgroundColor: theme.colors.white,
    padding: 6,
    paddingLeft: 10,
    marginHorizontal: wp(4),
  },
  searchIcon: {
    padding: 8,
  },
  searchInput: {
    flex: 1,
    borderRadius: theme.radius.sm,
    paddingVertical: 10,
    fontSize: hp(1.8),
  },
  closeIcon: {
    backgroundColor: theme.colors.neutral(0.1),
    padding: 8,
    borderRadius: theme.radius.sm,
  },
});
