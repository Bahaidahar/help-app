import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "@/src/shared/utils";
import { Stack } from "expo-router";
import { AuthContainer } from "@/src/features/Auth";

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
      <AuthContainer />
    </SafeAreaView>
  );
};

export default LoginPage;
