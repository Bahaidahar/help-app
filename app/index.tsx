import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "@/src/shared/utils";
import { Stack } from "expo-router";

import Choose from "@/src/widgets/Choose/ui";

const StartPage = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: COLORS.primary, paddingTop: 0 }}
    >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.primary },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitle: "",
        }}
      />
      <Choose />
    </SafeAreaView>
  );
};

export default StartPage;
