import { View, ScrollView, TouchableOpacity } from "react-native";
import { Container } from "@/src/shared/ui/Contianer";
import { COLORS, SIZES } from "@/src/shared/utils";
import { P } from "@/src/shared/ui/Texts";
import { EditIcon } from "@/src/shared/icons";
import { HeadWithParagraph } from "@/src/entities/HeadWithParagraph";
import { useRouter } from "expo-router";
import { Button } from "@/src/shared/ui/Button";
import { singout } from "../api/signout";
import { getData } from "@/src/shared/utils/storeData";

interface IProfile {
  varinat: "volunteer" | "invalid";
}

const Profile = ({ varinat }: IProfile) => {
  const router = useRouter();
  const handelSignout = async () => {
    const refresh = await getData("refresh");
    if (refresh) {
      await singout(refresh);
    }
  };
  return (
    <ScrollView>
      <View style={{ flexDirection: "column", padding: SIZES.semiMedium }}>
        <Container size="big" verPad={16}>
          <View style={{ flexDirection: "column", gap: SIZES.regular }}>
            <P
              text={varinat === "volunteer" ? "Волонтёр" : "Нуждающийся"}
              size="medium"
              isCenter
              color={COLORS.primary}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <P size="large" text="Baha Yelik" />
              <TouchableOpacity>
                <EditIcon color={COLORS.secondary} />
              </TouchableOpacity>
            </View>
            <HeadWithParagraph
              head="Местоположение:"
              paragraph="Алматы ул.Сатпаева д.65"
              pweight="500"
            />
            <HeadWithParagraph
              head="O себе"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
              pweight="400"
            />
            <HeadWithParagraph
              head="Аккаунт подтверждён:"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
              pweight="400"
            />
            <Button
              padVer={10}
              padHor={20}
              onPress={() => {
                router.push("/");
                handelSignout();
              }}
              color="secondary"
              text="Выйти"
              textSize="medium"
            />
          </View>
        </Container>
      </View>
    </ScrollView>
  );
};

export default Profile;
