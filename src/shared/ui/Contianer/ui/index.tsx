import { COLORS, SIZES } from "@/src/shared/utils";
import { View } from "react-native";

interface IContainer {
  children: React.ReactNode;
  size: "big" | "small";
  verPad: number;
}

const Container = ({ children, size, verPad }: IContainer) => {
  return (
    <View
      style={{
        borderRadius: SIZES.regular,
        backgroundColor: COLORS.contrat,
        paddingHorizontal: size === "big" ? SIZES.semiMedium : SIZES.semiLight,
        paddingVertical: size === "big" ? verPad : SIZES.semiLight,
      }}
    >
      {children}
    </View>
  );
};

export default Container;
