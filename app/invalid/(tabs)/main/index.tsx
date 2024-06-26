import { SafeAreaView, TouchableOpacity, View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useColors, SIZES } from "@/src/shared/utils";
import { Stack, useRouter } from "expo-router";
import { P } from "@/src/shared/ui/Texts";
import { InvalidCards } from "@/src/widgets/InvalidCards";
import { Button } from "@/src/shared/ui/Button";
import { getClientSupports } from "@/src/shared/api/invalid/myCard";
import { ICard } from "@/src/shared/interface/InvalidCard";

const FavoritesScreen = () => {
  const COLORS = useColors();
  const router = useRouter();

  const [supports, setSupprots] = useState<ICard[]>([]);
  useEffect(() => {
    handleGetSupport();
  }, []);
  const handleGetSupport = async () => {
    const res = await getClientSupports();
    setSupprots(res);
  };
  console.log(supports);
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
          padding: SIZES.semiMedium,
          flexDirection: "column",
          gap: SIZES.large,
        }}
      >
        <View>
          <P size="medium" text="Мои карточки помощи" color={COLORS.contrat} />
          <P
            size="regular"
            text="Лимит ваших карточек исчерпан. Завтра вы сможете снова запросить помощь"
            color={COLORS.contrat}
            opacity={0.5}
          />
        </View>
        <InvalidCards forInvalid searchValue={""} cards={supports} />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: COLORS.primary,
          padding: SIZES.medium,
          alignItems: "center",
        }}
      >
        <Button
          text="Создать карточку"
          color="secondary"
          padHor={30}
          padVer={10}
          textSize="medium"
          onPress={() => router.push("/invalid/(tabs)/main/create")}
        />
      </View>
    </SafeAreaView>
  );
};

export default FavoritesScreen;
