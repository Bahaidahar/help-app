import { Text } from "react-native";
import { IText } from "@/src/shared/interface";
import { COLORS, SIZES } from "@/src/shared/utils";

const P = ({ text, size, color, isCenter, fontWight, opacity }: IText) => {
  return (
    <Text
      style={{
        fontWeight: fontWight ? fontWight : "500",
        color: color ? color : COLORS.additional,
        textAlign: isCenter ? "center" : "auto",
        opacity: opacity,
        fontSize:
          size === "large"
            ? SIZES.large
            : size === "medium"
            ? SIZES.semiMedium
            : size === "regular"
            ? SIZES.regular
            : SIZES.light,
      }}
    >
      {text}
    </Text>
  );
};

export default P;
