import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "@/src/shared/utils";
import { Stack } from "expo-router";

import { SendCode } from "@/src/features/SendCode";

const LoginPage = () => {
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
      <SendCode />
    </SafeAreaView>
  );
};

export default LoginPage;
