import { View, Text } from "react-native";
import React from "react";
import { Input } from "@/src/shared/ui/Input";
import { IInput } from "@/src/shared/interface";
import { SIZES } from "@/src/shared/utils";

interface IInputWithLabel extends IInput {
  label: string;
}

const InputWithLabel = ({
  label,
  value,
  onChange,
  placeholder,
  variant,
  type,
}: IInputWithLabel) => {
  return (
    <View style={{ gap: 8 }}>
      <Text style={{ fontWeight: "500", fontSize: SIZES.regular }}>
        {label}
      </Text>
      <Input
        type={type ? type : "text"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        variant={variant}
      />
    </View>
  );
};

export default InputWithLabel;
