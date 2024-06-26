import { useColors } from "@/src/shared/utils";
import { Tabs } from "expo-router";
import { COLORS } from "@/src/shared/utils/Colors";
import {
  ChatIcon,
  FavoritesIcon,
  MainPageIcon,
  ProfileIcon,
} from "@/src/shared/icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShadowVisible: false,
        headerShown: false,
        tabBarAccessibilityLabel: "asd",
        headerTitle: "",
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.secondary,
        tabBarInactiveTintColor: COLORS.contrat,
        tabBarStyle: {
          backgroundColor: COLORS.primary,
          borderWidth: 0,
          shadowColor: "",
          borderColor: "",
        },
      }}
    >
      <Tabs.Screen
        name="main"
        options={{
          tabBarIcon: ({ color }) => <MainPageIcon color={color} />,
          headerStyle: { backgroundColor: COLORS.primary },
          headerShadowVisible: false,
          headerTitle: "",
          headerShown: false,
        }}
      />
      {/* <Tabs.Screen
        name="chat"
        options={{
          tabBarIcon: ({ color }) => <ChatIcon color={color} />,
          headerStyle: { backgroundColor: COLORS.primary },
          headerShadowVisible: false,
          headerTitle: "",
          headerShown: false,
        }}
      /> */}
      {/* <Tabs.Screen
        name="favorites"
        options={{
          tabBarIcon: ({ color }) => <FavoritesIcon color={color} />,
          headerStyle: { backgroundColor: COLORS.primary },
          headerShadowVisible: false,
          headerTitle: "",
          headerShown: false,
        }}
      /> */}
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => <ProfileIcon color={color} />,
          headerStyle: { backgroundColor: COLORS.primary },
          headerShadowVisible: false,
          headerTitle: "",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
