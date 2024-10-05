import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const _layout = () => {
  return (
    <Stack screenOptions={{ animation: "fade" }}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="home/index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default _layout;

const styles = StyleSheet.create({});
