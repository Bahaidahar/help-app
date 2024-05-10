import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useColors, SIZES } from "@/src/shared/utils";
import { Stack, useRouter } from "expo-router";
import { Container } from "@/src/shared/ui/Contianer";
import { P } from "@/src/shared/ui/Texts";
import { EditIcon } from "@/src/shared/icons";
import { Button } from "@/src/shared/ui/Button";
import { Profile } from "@/src/widgets/Profile";

const ProfileScreen = () => {
  const COLORS = useColors();
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
      <Profile varinat="invalid" />
    </SafeAreaView>
  );
};

export default ProfileScreen;
