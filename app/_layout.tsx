import { View, Text, Button } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";

export default function _layout() {
  const router = useRouter();
  return (
    <Stack
      screenOptions={
        {
          // headerStyle: {
          //     backgroundColor: 'black'
          // },
          // headerTintColor: 'white'
        }
      }
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="volunteer/(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="invalid/(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="auth"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
