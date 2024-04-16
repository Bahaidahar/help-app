import { Text, View } from "react-native";
import React, { useState } from "react";
import { Container } from "@/src/shared/ui/Contianer";
import { Button } from "@/src/shared/ui/Button";
import { router } from "expo-router";
import { SIZES } from "@/src/shared/utils";
import { Input } from "@/src/shared/ui/Input";

interface IFilterBlock {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
  isFoodProblem: boolean;
  setIsFoodProblem: (value: boolean) => void;
  isClothesProblem: boolean;
  setIsClothesProblem: (value: boolean) => void;
  isDrugsProblem: boolean;
  setIsDrugsProblem: (value: boolean) => void;
  isChildProblem: boolean;
  setIsChildProblem: (value: boolean) => void;
}

const FilterBlock = ({
  searchValue,
  setSearchValue,
  isFoodProblem,
  setIsFoodProblem,
  setIsChildProblem,
  setIsClothesProblem,
  setIsDrugsProblem,
  isChildProblem,
  isClothesProblem,
  isDrugsProblem,
}: IFilterBlock) => {
  return (
    <Container size="big" verPad={24}>
      <View style={{ flexDirection: "column", gap: 12 }}>
        <Input variant="search" value={searchValue} onChange={setSearchValue} />
        <View style={{ gap: SIZES.light, flexDirection: "column" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Button
              varinat="main"
              onPress={() => {
                setIsFoodProblem(!isFoodProblem);
              }}
              text="Еда"
              padHor={20}
              padVer={15}
              color={isFoodProblem ? "secondary" : "primary"}
            />
            <Button
              varinat="main"
              onPress={() => {
                setIsChildProblem(!isChildProblem);
              }}
              text="Товары для детей"
              padHor={20}
              padVer={15}
              color={isChildProblem ? "secondary" : "primary"}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Button
              varinat="main"
              onPress={() => {
                setIsDrugsProblem(!isDrugsProblem);
              }}
              text="Медикамент"
              textSize="regular"
              padHor={20}
              padVer={15}
              color={isDrugsProblem ? "secondary" : "primary"}
            />
            <Button
              varinat="main"
              onPress={() => {
                setIsClothesProblem(!isClothesProblem);
              }}
              text="Одежда"
              padHor={20}
              padVer={15}
              color={isClothesProblem ? "secondary" : "primary"}
            />
          </View>
        </View>
      </View>
    </Container>
  );
};

export default FilterBlock;
