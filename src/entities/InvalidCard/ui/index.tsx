import {
  ChildIcon,
  FoodIcon,
  GlassesIcon,
  MedicalIcon,
} from "@/src/shared/icons";
import { IInvalidCard } from "@/src/shared/interface";
import { ICard } from "@/src/shared/interface/InvalidCard";
import { Container } from "@/src/shared/ui/Contianer";
import { useColors, SIZES } from "@/src/shared/utils";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

interface SpecialInvalidCard extends ICard {
  forInvalid: boolean;
}

const InvalidCard = ({
  forInvalid,
  id,
  is_ended,
  is_viewed,
  description,
  stars,
  staff_username,
  review,
  address,
  client_username,
}: SpecialInvalidCard) => {
  const COLORS = useColors();
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => {
        if (forInvalid) {
          router.push(`/invalid/(tabs)/main/${description}-${address}`);
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
              {address}
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "500" }}>
              {description}
            </Text>
          </View>
        </View>
      </Container>
    </TouchableOpacity>
  );
};

export default InvalidCard;
