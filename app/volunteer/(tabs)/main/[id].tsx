import React, { useState } from "react";
import { Linking, ScrollView, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { COLORS, SIZES } from "@/src/shared/utils";
import { Container } from "@/src/shared/ui/Contianer";
import { P } from "@/src/shared/ui/Texts";
import { Button } from "@/src/shared/ui/Button";
import { ChatIcon, FavoritesIcon, WhatsappIcon } from "@/src/shared/icons";
import { MyMap } from "@/src/widgets/Map";

const User = () => {
  const { id } = useLocalSearchParams();
  const [showMap, setShowMap] = useState(false);
  const markers = [
    {
      id: 1,
      name: "Baha",
      img: require("../../../../src/shared/assets/me.jpeg"),
      latitude: 43.21255513375194,
      longitude: 76.89594803576219,
      desc: "haha lol sex pizda hui jopa chlen pipiska gay sex masturbation",
    },
  ];
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
        padding: SIZES.semiMedium,
      }}
    >
      <ScrollView>
        <Container size="big" verPad={28}>
          <View style={{ flexDirection: "column", gap: SIZES.regular }}>
            <P size="large" text={`Baha Yelik ${id}`} />
            <View style={{ flexDirection: "column", gap: SIZES.light }}>
              <P size="medium" text="Тип инвалидности:" />
              <P size="regular" text="Фронтендер" />
            </View>
            <P size="medium" text="Степень: 3" />
            <View style={{ flexDirection: "column", gap: SIZES.light }}>
              <P size="medium" text="Местоположение:" />
              <P size="regular" text="Алматы ул.Сатпаева д.65" />
            </View>
            <View style={{ flexDirection: "column", gap: SIZES.light }}>
              <P size="medium" text="О себе:" />
              <P
                fontWight="400"
                size="regular"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
              />
            </View>
            <View style={{ flexDirection: "column", gap: SIZES.medium }}>
              <View style={{ flexDirection: "column", gap: SIZES.light }}>
                <P size="medium" text="Нужда:" />
                <P
                  fontWight="400"
                  size="regular"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  textSize="medium"
                  onPress={() => {
                    setShowMap(!showMap);
                  }}
                  text="Карта"
                  padHor={30}
                  padVer={7}
                  color="secondary"
                />
                <Button
                  padHor={10}
                  padVer={10}
                  onPress={() => Linking.openURL("https://wa.me/+77057315777")}
                  color="primary"
                  varinat="icon"
                >
                  <WhatsappIcon color={COLORS.contrat} />
                </Button>
                <Button
                  padHor={10}
                  padVer={10}
                  onPress={() => {}}
                  color="primary"
                  varinat="icon"
                >
                  <FavoritesIcon color={COLORS.contrat} />
                </Button>
              </View>
              <Button
                textSize="medium"
                onPress={() => {
                  setShowMap(!showMap);
                }}
                text="Взять зявку"
                padHor={30}
                padVer={7}
                color="secondary"
              />
            </View>
            {showMap ? (
              <View style={{ paddingBottom: SIZES.regular }}>
                <MyMap markers={markers} showLine />
              </View>
            ) : null}
          </View>
        </Container>
      </ScrollView>
    </View>
  );
};

export default User;
