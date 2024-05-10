import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { useColors } from "@/src/shared/utils";
import { COLORS } from "@/src/shared/utils/Colors";
export default function _layout() {
  // const COLORS = useColors();
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
