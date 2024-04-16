import { View, Text } from "react-native";
import React from "react";
import { COLORS, SIZES } from "@/src/shared/utils";
import { SmallHeartIcon } from "@/src/shared/icons";
import { P } from "@/src/shared/ui/Texts";

interface IStep {
  isFirst: boolean;
}

const Step = ({ isFirst }: IStep) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: SIZES.light,
      }}
    >
      <SmallHeartIcon isHalf={isFirst} />
      <P size="medium" color={COLORS.contrat} text={isFirst ? "1/2" : "2/2"} />
    </View>
  );
};

export default Step;
