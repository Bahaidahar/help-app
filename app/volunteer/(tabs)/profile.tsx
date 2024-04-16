import { SafeAreaView } from "react-native";
import React from "react";
import { COLORS } from "@/src/shared/utils";
import { Stack, useRouter } from "expo-router";
import { Profile } from "@/src/widgets/Profile";

const ProfileScreen = () => {
  const router = useRouter();
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
