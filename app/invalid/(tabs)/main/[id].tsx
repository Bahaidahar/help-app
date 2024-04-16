import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SIZES } from "@/src/shared/utils";
import { Stack } from "expo-router";
import { Container } from "@/src/shared/ui/Contianer";
import { P } from "@/src/shared/ui/Texts";
import { EditIcon } from "@/src/shared/icons";
import { Button } from "@/src/shared/ui/Button";

const EditScreen = () => {
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
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <P size="large" text="Я" />
              <TouchableOpacity>
                <EditIcon color={COLORS.secondary} />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "column", gap: SIZES.light }}>
              <P size="medium" text="Местоположение:" />
              <P
                size="regular"
                color={COLORS.primary}
                opacity={0.5}
                text="Введите информацию о своём местоположении или включите геопозицию... "
              />
            </View>
            <View style={{ flexDirection: "column", gap: SIZES.light }}>
              <P size="medium" text="О себе:" />
              <P
                size="regular"
                color={COLORS.primary}
                opacity={0.5}
                text="Введите информацию о себе..."
              />
            </View>
            <View style={{ flexDirection: "column", gap: SIZES.light }}>
              <P size="medium" text="Нужда:" />
              <P
                size="regular"
                color={COLORS.primary}
                opacity={0.5}
                text="Введите информацию о себе..."
              />
            </View>
            <Button
              padVer={10}
              padHor={20}
              onPress={() => {}}
              color="secondary"
              text="Изменить"
              textSize="medium"
            />
          </View>
        </Container>
      </View>
    </SafeAreaView>
  );
};

export default EditScreen;
