import { useColors, SIZES } from "@/src/shared/utils";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { P } from "../../Texts";

interface IButton {
  text?: string;
  textColor?: string;
  onPress: () => void;
  varinat?: "auth" | "main" | "icon";
  padVer?: number;
  padHor?: number;
  color?: "primary" | "secondary" | "contrat";
  textSize?: "regular" | "medium" | "large";
  children?: React.ReactNode;
}

const Button = ({
  text,
  onPress,
  varinat,
  padHor,
  padVer,
  color,
  textSize,
  children,
  textColor,
}: IButton) => {
  const COLORS = useColors();
  switch (varinat) {
    case "auth":
      return (
        <TouchableOpacity
          onPress={onPress}
          style={{
            alignItems: "center",
            backgroundColor: COLORS.secondary,
            borderRadius: SIZES.light,
            padding: 15,
          }}
        >
          <Text style={{ fontSize: SIZES.regular, fontWeight: "500" }}>
            {text}
          </Text>
        </TouchableOpacity>
      );
    case "icon":
      return (
        <TouchableOpacity
          onPress={onPress}
          style={{
            alignItems: "center",
            backgroundColor:
              color === "primary" ? COLORS.primary : COLORS.secondary,
            borderRadius: SIZES.light,
            paddingHorizontal: padHor,
            paddingVertical: padVer,
          }}
        >
          {children}
        </TouchableOpacity>
      );
    default:
      return (
        <TouchableOpacity
          onPress={onPress}
          style={{
            alignItems: "center",
            backgroundColor:
              color === "primary"
                ? COLORS.primary
                : color === "secondary"
                ? COLORS.secondary
                : COLORS.contrat,
            borderRadius: SIZES.light,
            paddingHorizontal: padHor,
            paddingVertical: padVer,
          }}
        >
          <P
            size={textSize ? textSize : "regular"}
            color={textColor ? textColor : COLORS.contrat}
            text={text ? text : ""}
          />
        </TouchableOpacity>
      );
  }
};

export default Button;
