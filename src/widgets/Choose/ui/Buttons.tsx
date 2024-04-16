import { View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "@/src/shared/utils";
import { Button } from "@/src/shared/ui/Button";
import { useRouter } from "expo-router";
interface IButtons {
  isFirst: boolean;
  setIsFirst: (isFirst: boolean) => void;
  onClickStoreRole: (roleId: number) => void;
  onClickStoreView: (viewId: number) => void;
}
const Buttons = ({
  isFirst,
  setIsFirst,
  onClickStoreRole,
  onClickStoreView,
}: IButtons) => {
  const router = useRouter();
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "column",
        gap: SIZES.semiMedium,
      }}
    >
      {isFirst ? (
        <>
          <Button
            onPress={() => {
              setIsFirst(!isFirst);
              onClickStoreRole(1);
            }}
            textSize="medium"
            text="Волонтёр"
            textColor={COLORS.additional}
            color="contrat"
            padVer={30}
          />
          <Button
            onPress={() => {
              setIsFirst(!isFirst);
              onClickStoreRole(2);
            }}
            textSize="medium"
            text="Нуждающийся"
            textColor={COLORS.additional}
            color="contrat"
            padVer={30}
          />
        </>
      ) : (
        <>
          <Button
            onPress={() => {
              onClickStoreView(1);
              router.push("/auth");
            }}
            textSize="medium"
            text="Я здоров"
            textColor={COLORS.additional}
            color="contrat"
            padVer={30}
          />
          <Button
            onPress={() => {
              onClickStoreView(2);
              router.push("/auth");
            }}
            textSize="medium"
            text="Дальтонизм"
            textColor={COLORS.additional}
            color="contrat"
            padVer={30}
          />
          <Button
            onPress={() => {
              onClickStoreView(3);
              router.push("/auth");
            }}
            textSize="medium"
            text="Слабовидящий"
            textColor={COLORS.additional}
            color="contrat"
            padVer={30}
          />
          <Button
            onPress={() => {
              setIsFirst(!isFirst);
            }}
            textSize="medium"
            text="Назад"
            textColor={COLORS.contrat}
            color="primary"
            padVer={30}
          />
        </>
      )}
    </View>
  );
};

export default Buttons;
