import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS, SIZES } from "@/src/shared/utils";
import { Stack, useRouter } from "expo-router";
import { Container } from "@/src/shared/ui/Contianer";
import { P } from "@/src/shared/ui/Texts";
import { EditIcon } from "@/src/shared/icons";
import { Button } from "@/src/shared/ui/Button";

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
      <ScrollView>
        <View style={{ flexDirection: "column", padding: SIZES.semiMedium }}>
          <Container size="big" verPad={16}>
            <View style={{ flexDirection: "column", gap: SIZES.regular }}>
              <P
                text="Нуждающийся"
                size="medium"
                isCenter
                color={COLORS.primary}
              />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <P size="large" text="Baha Yelik" />
                <TouchableOpacity>
                  <EditIcon color={COLORS.secondary} />
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "column", gap: SIZES.light }}>
                <P size="medium" text="Местоположение:" />
                <P size="regular" text="Алматы ул.Сатпаева д.65" />
              </View>
              <View style={{ flexDirection: "column", gap: SIZES.light }}>
                <P size="medium" text="О себе:" />
                <P
                  size="regular"
                  fontWight="400"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                />
              </View>
              <View style={{ flexDirection: "column", gap: SIZES.light }}>
                <P size="medium" text="Аккаунт подтверждён:" />
                <P
                  size="regular"
                  fontWight="400"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                />
              </View>
              <Button
                padVer={10}
                padHor={20}
                onPress={() => {
                  router.push("/");
                }}
                color="secondary"
                text="Выйти"
                textSize="medium"
              />
            </View>
          </Container>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
