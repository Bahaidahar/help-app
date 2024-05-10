import { View, Text, TouchableOpacity } from "react-native";

import { useColors, SIZES } from "@/src/shared/utils";

interface ISwitchOption {
  isLogin: boolean;
  setIsLogin: (IsLogin: boolean) => void;
}

const SwitchOption = ({ isLogin, setIsLogin }: ISwitchOption) => {
  const COLORS = useColors();
  return (
    <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
      <View
        style={{
          paddingHorizontal: 40,
          paddingVertical: 15,
          backgroundColor: isLogin ? COLORS.additional : COLORS.secondary,
          borderTopStartRadius: SIZES.regular,
          borderTopRightRadius: SIZES.regular,
        }}
      >
        <Text
          style={{
            color: isLogin ? COLORS.secondary : COLORS.additional,
            fontWeight: "500",
            fontSize: SIZES.regular,
          }}
        >
          {isLogin ? "Вход" : "Регистрация"}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => setIsLogin(!isLogin)}
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          paddingLeft: isLogin ? 6 : 20,
          backgroundColor: isLogin ? COLORS.secondary : COLORS.additional,
          borderTopRightRadius: 12,
        }}
      >
        <Text
          style={{
            color: isLogin ? COLORS.additional : COLORS.secondary,
            fontWeight: "500",
            fontSize: 16,
          }}
        >
          {isLogin ? "Регистрация" : "Вход"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SwitchOption;
