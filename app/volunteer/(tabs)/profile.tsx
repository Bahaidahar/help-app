import { SafeAreaView } from "react-native";
import React from "react";
import { useColors } from "@/src/shared/utils";
import { Stack } from "expo-router";
import { Profile } from "@/src/widgets/Profile";

const ProfileScreen = () => {
  const COLORS = useColors();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.primary },
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />
      <Profile varinat="volunteer" />
    </SafeAreaView>
  );
};

export default ProfileScreen;
