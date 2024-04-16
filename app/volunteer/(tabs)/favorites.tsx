import { SafeAreaView, View } from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES } from "@/src/shared/utils";
import { Stack } from "expo-router";
import { P } from "@/src/shared/ui/Texts";
import { InvalidCards } from "@/src/widgets/InvalidCards";

const FavoritesScreen = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isFoodProblem, setIsFoodProblem] = useState(false);
  const [isClothesProblem, setIsClothesProblem] = useState(false);
  const [isDrugsProblem, setIsDrugsProblem] = useState(false);
  const [isChildProblem, setIsChildProblem] = useState(false);
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
          gap: SIZES.light,
        }}
      >
        <View>
          <P size="medium" text="Закладки" color={COLORS.contrat} />
          <P
            size="regular"
            text="Успейте помочь тем кого вы сюда добавили, так как за вас это могут сделать другие люди и карточка помощи исчезнет"
            color={COLORS.contrat}
            opacity={0.5}
          />
        </View>
        <InvalidCards
          searchValue={searchValue}
          isFoodProblem={isFoodProblem}
          isClothesProblem={isClothesProblem}
          isDrugsProblem={isDrugsProblem}
          isChildProblem={isChildProblem}
          forInvalid={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default FavoritesScreen;
