import { SafeAreaView } from "react-native";
import React from "react";
import { COLORS } from "@/src/shared/utils";
import { Link, Stack } from "expo-router";

const ChatScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.primary },
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />
    </SafeAreaView>
  );
};

export default ChatScreen;
