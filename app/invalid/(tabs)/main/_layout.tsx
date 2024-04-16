import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { COLORS } from "@/src/shared/utils";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="create"
        options={{
          title: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
        }}
      />
    </Stack>
  );
}
