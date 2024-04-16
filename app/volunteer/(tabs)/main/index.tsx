import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES } from "@/src/shared/utils";
import { Stack } from "expo-router";
import { FilterBlock } from "@/src/features/FilterBlock";
import { InvalidCards } from "@/src/widgets/InvalidCards";
import { MyMap } from "@/src/widgets/Map";

const MainScreen = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isFoodProblem, setIsFoodProblem] = useState(false);
  const [isClothesProblem, setIsClothesProblem] = useState(false);
  const [isDrugsProblem, setIsDrugsProblem] = useState(false);
  const [isChildProblem, setIsChildProblem] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const markers = [
    {
      id: 1,
      name: "Baha",
      img: require("../../../../src/shared/assets/me.jpeg"),
      latitude: 43.21255513375194,
      longitude: 76.89594803576219,
      desc: "haha lol sex pizda hui jopa chlen pipiska gay sex masturbation",
    },
    {
      id: 2,
      name: "Baha",
      img: require("../../../../src/shared/assets/me.jpeg"),
      latitude: 42.21255513375194,
      longitude: 76.89594803576219,
      desc: "haha lol sex pizda hui jopa chlen pipiska gay sex masturbation",
    },
  ];
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
        <FilterBlock
          isFoodProblem={isFoodProblem}
          setIsFoodProblem={setIsFoodProblem}
          isClothesProblem={isClothesProblem}
          setIsClothesProblem={setIsClothesProblem}
          isDrugsProblem={isDrugsProblem}
          setIsDrugsProblem={setIsDrugsProblem}
          isChildProblem={isChildProblem}
          setIsChildProblem={setIsChildProblem}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <View style={{ flexDirection: "column", gap: SIZES.medium }}>
          <TouchableOpacity
            onPress={() => setShowMap(!showMap)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: SIZES.light,
            }}
          >
            <Text style={{ color: COLORS.contrat, fontSize: SIZES.medium }}>
              {showMap ? "Пойск по анкетам" : "Пойск по карте"}
            </Text>
          </TouchableOpacity>
          {showMap ? (
            <View style={{ paddingBottom: SIZES.regular }}>
              <MyMap markers={markers} />
            </View>
          ) : (
            <InvalidCards
              forInvalid={false}
              searchValue={searchValue}
              isFoodProblem={isFoodProblem}
              isClothesProblem={isClothesProblem}
              isDrugsProblem={isDrugsProblem}
              isChildProblem={isChildProblem}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;
