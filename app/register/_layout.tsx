import React from "react";
import { Stack } from "expo-router";
import { COLORS } from "@/src/shared/utils/Colors";
export default function _layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
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
