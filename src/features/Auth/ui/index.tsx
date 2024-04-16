import { View } from "react-native";
import { useState } from "react";
import { COLORS, SIZES } from "@/src/shared/utils";
import AuthOption from "./AuthOption";
import SwitchOption from "./SwitchOption";
const AuthContainer = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 15,
      }}
    >
      <View style={{ alignItems: "center" }}>
        <SwitchOption isLogin={isLogin} setIsLogin={setIsLogin} />
        <View
          style={{
            backgroundColor: COLORS.contrat,
            padding: 20,
            paddingVertical: 20,
            width: "100%",
            borderRadius: SIZES.medium,
          }}
        >
          <AuthOption variant={isLogin} />
        </View>
      </View>
    </View>
  );
};

export default AuthContainer;
