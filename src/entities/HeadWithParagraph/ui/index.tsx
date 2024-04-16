import { View, Text } from "react-native";
import React from "react";
import { SIZES } from "@/src/shared/utils";
import { P } from "@/src/shared/ui/Texts";

interface IHeadWithParagraph {
  head: string;
  paragraph: string;
  pweight: "400" | "500";
}

const HeadWithParagraph = ({
  head,
  paragraph,
  pweight,
}: IHeadWithParagraph) => {
  return (
    <View style={{ flexDirection: "column", gap: SIZES.light }}>
      <P size="medium" text={head} />
      <P size="regular" fontWight={pweight} text={paragraph} />
    </View>
  );
};

export default HeadWithParagraph;
