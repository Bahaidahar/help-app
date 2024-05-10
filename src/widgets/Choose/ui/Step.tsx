import { View, Text } from "react-native";
import React from "react";
import { useColors, SIZES } from "@/src/shared/utils";
import { SmallHeartIcon } from "@/src/shared/icons";
import { P } from "@/src/shared/ui/Texts";

interface IStep {
  isFirst: boolean;
}

const Step = ({ isFirst }: IStep) => {
  const COLORS = useColors();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: SIZES.light,
      }}
    >
      <SmallHeartIcon isHalf={isFirst} color={COLORS.secondary} />
      <P size="medium" color={COLORS.contrat} text={isFirst ? "1/2" : "2/2"} />
    </View>
  );
};

export default Step;
