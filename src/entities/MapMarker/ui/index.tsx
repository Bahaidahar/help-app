import { View, Image, Alert } from "react-native";
import React from "react";
import { Callout, Marker } from "react-native-maps";
import { P } from "@/src/shared/ui/Texts";
import { useColors } from "@/src/shared/utils";
import { IMapMarker } from "@/src/shared/interface";
import { useRouter } from "expo-router";

const MapMarker = ({
  id,
  img,
  latitude,
  longitude,
  name,
  desc,
}: IMapMarker) => {
  const router = useRouter();
  const COLORS = useColors();
  const onClickShowMarker = (marker: string, index: number) => {
    Alert.alert("Подтверждение", `Вы хотите увидеть анкету "${marker}"?`, [
      {
        text: "Да",
        onPress: () => router.push(`/volunteer/(tabs)/main/${index}`),
      },
      {
        text: "Нет",
        style: "cancel",
      },
    ]);
  };
  return (
    <Marker
      key={id}
      coordinate={{
        latitude: latitude,
        longitude: longitude,
      }}
    >
      <Callout onPress={() => onClickShowMarker(name, id)}>
        <View
          style={{
            padding: 10,
            flexDirection: "column",
            alignItems: "center",
            borderRadius: 12,
          }}
        >
          <Image
            source={img}
            style={{ borderRadius: 1000, width: 50, height: 50 }}
          />
          <P size="medium" color={COLORS.additional} text={name} />
          <View style={{ overflow: "hidden", width: 100, height: 50 }}>
            <P size="light" color={COLORS.additional} text={desc} />
          </View>
        </View>
      </Callout>
    </Marker>
  );
};

export default MapMarker;
