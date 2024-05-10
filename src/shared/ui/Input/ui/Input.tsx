import { EyeClosedIcon, EyeIcon } from "@/src/shared/icons";
import SearchIcon from "@/src/shared/icons/SearchIcon";
import { IInput } from "@/src/shared/interface";
import { useColors, SIZES } from "@/src/shared/utils";
import { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { View } from "react-native";

const Input = ({ placeholder, value, onChange, variant, type }: IInput) => {
  const COLORS = useColors();
  const [showPass, setShowPass] = useState(false);
  switch (variant) {
    case "auth":
      if (type === "password") {
        return (
          <View
            style={{
              position: "relative",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderWidth: 1,
              borderRadius: SIZES.light,
              borderColor: COLORS.primary,
              backgroundColor: `${COLORS.primary}33`,
            }}
          >
            <TextInput
              placeholder={placeholder}
              value={value}
              onChangeText={onChange}
              secureTextEntry={!showPass}
              style={{
                fontWeight: "500",
                fontSize: SIZES.regular,
                paddingHorizontal: 15,
                paddingVertical: 8,
                width: "100%",
              }}
              placeholderTextColor="gray"
            />
            <View style={{ position: "absolute", right: 0 }}>
              {showPass ? (
                <TouchableOpacity
                  style={{ paddingRight: SIZES.light }}
                  onPress={() => setShowPass(!showPass)}
                >
                  <EyeClosedIcon color={COLORS.additional} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={{ paddingRight: SIZES.light }}
                  onPress={() => setShowPass(!showPass)}
                >
                  <EyeIcon color={COLORS.additional} />
                </TouchableOpacity>
              )}
            </View>
          </View>
        );
      } else {
        return (
          <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChange}
            style={{
              borderRadius: SIZES.light,
              borderColor: COLORS.primary,
              borderWidth: 1,
              paddingHorizontal: 15,
              paddingVertical: 8,
              fontWeight: "500",
              fontSize: SIZES.regular,
              backgroundColor: `${COLORS.primary}33`,
            }}
            placeholderTextColor="gray"
          />
        );
      }
    case "search":
      return (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: COLORS.secondary,
            paddingHorizontal: 16,
            paddingVertical: 10,
            borderRadius: SIZES.light,
          }}
        >
          <SearchIcon color={COLORS.contrat} />
          <TextInput
            placeholder="Пойск"
            value={value}
            onChangeText={onChange}
            style={{
              flex: 1,
              marginLeft: 10,
              fontSize: SIZES.semiMedium,
              fontWeight: "500",
            }}
            placeholderTextColor={COLORS.contrat}
          />
        </View>
      );
  }
};

export default Input;
