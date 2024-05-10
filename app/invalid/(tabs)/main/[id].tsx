import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { useColors, SIZES } from "@/src/shared/utils";
import { Stack, useGlobalSearchParams } from "expo-router";
import { Container } from "@/src/shared/ui/Contianer";
import { P } from "@/src/shared/ui/Texts";
import { EditIcon } from "@/src/shared/icons";
import { Button } from "@/src/shared/ui/Button";

const EditScreen = () => {
  const COLORS = useColors();
  const param = useGlobalSearchParams();

  const id = param["id"] as string;
  const [desc, addres] = id.split("-");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.primary },
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />
      <View
        style={{
          flexDirection: "column",
          gap: SIZES.large,
          flex: 1,
          justifyContent: "center",
          padding: SIZES.semiMedium,
        }}
      >
        <Container size="big" verPad={16}>
          <View style={{ flexDirection: "column", gap: SIZES.regular }}>
            <P
              text="Нуждающийся"
              size="medium"
              isCenter
              color={COLORS.primary}
            />
            {/* <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <TouchableOpacity>
                <EditIcon color={COLORS.secondary} />
              </TouchableOpacity>
            </View> */}
            <View style={{ flexDirection: "column", gap: SIZES.light }}>
              <P size="medium" text="Местоположение:" />
              <P
                size="regular"
                color={COLORS.primary}
                opacity={0.5}
                text={addres}
              />
            </View>
            {/* <View style={{ flexDirection: "column", gap: SIZES.light }}>
              <P size="medium" text="О себе:" />
              <P
                size="regular"
                color={COLORS.primary}
                opacity={0.5}
                text="Введите информацию о себе..."
              />
            </View> */}
            <View style={{ flexDirection: "column", gap: SIZES.light }}>
              <P size="medium" text="Нужда:" />
              <P
                size="regular"
                color={COLORS.primary}
                opacity={0.5}
                text={desc}
              />
            </View>
          </View>
        </Container>
      </View>
    </SafeAreaView>
  );
};

export default EditScreen;
