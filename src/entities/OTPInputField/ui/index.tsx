import { COLORS, SIZES } from "@/src/shared/utils";
import React, { useEffect, useRef, useState } from "react";
import { Pressable, TextInput, View, Text } from "react-native";

interface IOTPInputField {
  code: string;
  setCode: (code: string) => void;
  maxLength: number;
  setPinReady: (pinReady: boolean) => void;
}

const OTPInputField = ({
  code,
  setCode,
  setPinReady,
  maxLength,
}: IOTPInputField) => {
  const codeDigitsArray = new Array(maxLength).fill(0);
  const textInputRef = useRef<TextInput>(null);
  const [inputContainerIsFocused, setInputContainerIsFocused] = useState(false);

  useEffect(() => {
    setPinReady(code.length === maxLength);
    return () => setPinReady(false);
  }, [code]);

  const toCodeDigitInput = (_value: string, index: number) => {
    const emptyInputChar = " ";
    const digit = code[index] || emptyInputChar;
    const isCurrentDigit = index === code.length;
    const isLastDigit = index === maxLength - 1;
    const isCodeFull = code.length === maxLength;

    const isDigitFocused = isCurrentDigit || (isLastDigit && isCodeFull);

    return (
      <View
        style={{
          borderColor: COLORS.contrat,
          borderWidth: 2,
          borderRadius: 5,
          padding: 12,
          width: 45,
        }}
        key={index}
      >
        <Text
          style={{
            fontSize: SIZES.medium,
            fontWeight: "bold",
            textAlign: "center",
            color: COLORS.additional,
            backgroundColor:
              inputContainerIsFocused && isDigitFocused ? COLORS.contrat : "",
          }}
        >
          {digit}
        </Text>
      </View>
    );
  };
  const handleOnPress = () => {
    setInputContainerIsFocused(true);
    textInputRef.current?.focus();
  };
  const handleOnBlur = () => {
    setInputContainerIsFocused(false);
  };
  return (
    <View>
      <Pressable
        onPress={handleOnPress}
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          gap: SIZES.light,
        }}
      >
        {codeDigitsArray.map(toCodeDigitInput)}
      </Pressable>
      <TextInput
        value={code}
        onChangeText={setCode}
        maxLength={maxLength}
        keyboardType="number-pad"
        returnKeyType="done"
        textContentType="oneTimeCode"
        style={{
          position: "absolute",
          opacity: 0,
          borderColor: COLORS.contrat,
          borderWidth: 2,
          borderRadius: 5,
          padding: 12,
          marginTop: 15,
          width: 300,
          color: COLORS.additional,
        }}
      />
    </View>
  );
};

export default OTPInputField;
