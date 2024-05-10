import { View, Text } from "react-native";
import React from "react";
import { SIZES } from "@/src/shared/utils";
import { P } from "@/src/shared/ui/Texts";

interface IHeadWithParagraph {
  head: string;
  paragraph: string;
  pweight: "400" | "500";
  isCenter?: boolean;
}

const HeadWithParagraph = ({
  head,
  paragraph,
  pweight,
  isCenter,
}: IHeadWithParagraph) => {
  return (
    <View
      style={{
        flexDirection: "column",
        gap: SIZES.light,
        alignItems: isCenter ? "center" : "baseline",
      }}
    >
      <P size="medium" text={head} />
      <P
        size="regular"
        fontWight={pweight}
        text={paragraph}
        isCenter={isCenter}
      />
    </View>
  );
};

export default HeadWithParagraph;
