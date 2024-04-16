import {
  ChildIcon,
  FoodIcon,
  GlassesIcon,
  MedicalIcon,
} from "@/src/shared/icons";
import { IInvalidCard } from "@/src/shared/interface";
import { Container } from "@/src/shared/ui/Contianer";
import { COLORS, SIZES } from "@/src/shared/utils";
import { Link, router, useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

interface SpecialInvalidCard extends IInvalidCard {
  forInvalid: boolean;
}

const InvalidCard = ({
  name,
  desc,
  id,
  isBlind,
  isChild,
  isFood,
  isMedicine,
  forInvalid,
}: SpecialInvalidCard) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => {
        if (forInvalid) {
          router.push(`/invalid/(tabs)/main/${id}`);
        } else {
          router.push(`/volunteer/(tabs)/main/${id}`);
        }
      }}
    >
      <Container size="big" verPad={16}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: SIZES.regular,
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: COLORS.secondary,
              borderRadius: 1000,
            }}
          ></View>
          <View style={{ flexDirection: "column", gap: SIZES.light }}>
            <Text style={{ fontSize: SIZES.semiMedium, fontWeight: "500" }}>
              {name}
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "500" }}>{desc}</Text>
          </View>
          <View style={{ flexDirection: "column", gap: 4 }}>
            <View style={{ flexDirection: "row", gap: SIZES.light }}>
              <FoodIcon color={isFood ? COLORS.secondary : COLORS.primary} />
              <ChildIcon color={isChild ? COLORS.secondary : COLORS.primary} />
            </View>
            <View style={{ flexDirection: "row", gap: SIZES.light }}>
              <MedicalIcon
                color={isMedicine ? COLORS.secondary : COLORS.primary}
              />
              <GlassesIcon
                color={isBlind ? COLORS.secondary : COLORS.primary}
              />
            </View>
          </View>
        </View>
      </Container>
    </TouchableOpacity>
  );
};

export default InvalidCard;
