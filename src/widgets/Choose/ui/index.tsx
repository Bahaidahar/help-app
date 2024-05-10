import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { BigHeartHalfIcon } from "@/src/shared/icons";
import { P } from "@/src/shared/ui/Texts";
import { useRouter } from "expo-router";
import { getData, storeData } from "@/src/shared/utils/storeData";
import Step from "./Step";
import Buttons from "./Buttons";
import { useColors } from "@/src/shared/utils";

const Choose = () => {
  const COLORS = useColors();
  const [isFirst, setIsFirst] = useState(true);
  const router = useRouter();
  const onClickStoreRole = async (roleId: number) => {
    await storeData({ name: "role", storeData: `${roleId}` });
  };
  const onClickStoreView = async (viewId: number) => {
    await storeData({ name: "view", storeData: `${viewId}` });
  };

  const userIsLogged = async () => {
    const res = await getData("refresh");
    if (res !== null) {
      router.push("/volunteer/(tabs)/main");
    }
  };

  useEffect(() => {
    setTimeout(userIsLogged, 500);
  }, []);
  return (
    <View style={{ position: "relative", justifyContent: "center" }}>
      <View
        style={{
          paddingTop: 50,
          paddingHorizontal: 40,
          flexDirection: "column",
          gap: 100,
        }}
      >
        <Step isFirst={isFirst} />
        <View style={{ flexDirection: "column", gap: 40 }}>
          <P
            isCenter
            size="medium"
            text={
              isFirst
                ? "К какой группе вы себя причисляете?"
                : "Какая у вас особенность ?"
            }
          />
          <Buttons
            isFirst={isFirst}
            onClickStoreRole={onClickStoreRole}
            onClickStoreView={onClickStoreView}
            setIsFirst={setIsFirst}
          />
        </View>
      </View>
      <View style={{ position: "absolute", top: 140, zIndex: -1 }}>
        {isFirst ? (
          <BigHeartHalfIcon color={COLORS.secondary} />
        ) : (
          <BigHeartHalfIcon isReversed color={COLORS.secondary} />
        )}
      </View>
    </View>
  );
};

export default Choose;
