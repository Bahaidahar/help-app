import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Stack, router } from "expo-router";
import { useColors, SIZES } from "@/src/shared/utils";
import { Container } from "@/src/shared/ui/Contianer";
import { P } from "@/src/shared/ui/Texts";
import { EditIcon } from "@/src/shared/icons";
import { Button } from "@/src/shared/ui/Button";
import { create } from "@/src/shared/api/support/create";
import { Input } from "@/src/shared/ui/Input";

const CreateScreen = () => {
  const [address, setAddress] = useState("");
  const [description, setDescripton] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const handeleCreate = async () => {
    await create(description, address);
  };
  const COLORS = useColors();
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
                justifyContent: "flex-end",
              }}
            >
              {/* <P size="large" text="Я" /> */}
              <TouchableOpacity onPress={() => setIsEdit(!isEdit)}>
                <EditIcon color={COLORS.secondary} />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "column", gap: SIZES.light }}>
              <P size="medium" text="Местоположение:" />
              {isEdit ? (
                <Input value={address} onChange={setAddress} variant="auth" />
              ) : (
                <P
                  size="regular"
                  color={COLORS.primary}
                  opacity={0.5}
                  text="Введите информацию о своём местоположении или включите геопозицию... "
                />
              )}
            </View>
            <View style={{ flexDirection: "column", gap: SIZES.light }}>
              <P size="medium" text="Нужда:" />
              {isEdit ? (
                <Input
                  value={description}
                  onChange={setDescripton}
                  variant="auth"
                />
              ) : (
                <P
                  size="regular"
                  color={COLORS.primary}
                  opacity={0.5}
                  text="Введите информацию о себе..."
                />
              )}
            </View>
            <Button
              padVer={10}
              padHor={20}
              onPress={() => {
                handeleCreate();
                router.push("/invalid/(tabs)/main");
              }}
              color="secondary"
              text="Опубликовать"
              textSize="medium"
            />
          </View>
        </Container>
      </View>
    </SafeAreaView>
  );
};

export default CreateScreen;
function async() {
  throw new Error("Function not implemented.");
}
