import { useColors, SIZES } from "@/src/shared/utils";
import { Text } from "react-native";

interface IMarkText {
  text: string;
  underline?: boolean;
  textCenter?: boolean;
}

const MarkText = ({ text, underline, textCenter }: IMarkText) => {
  const COLORS = useColors();
  return (
    <Text
      style={{
        fontSize: SIZES.regular,
        color: COLORS.primary,
        opacity: 0.4,
        fontWeight: "400",
        textDecorationLine: underline ? "underline" : "none",
        textAlign: textCenter ? "center" : "auto",
      }}
    >
      {text}
    </Text>
  );
};

export default MarkText;
