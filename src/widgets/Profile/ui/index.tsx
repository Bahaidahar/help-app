import { View, ScrollView, TouchableOpacity, Image } from "react-native";
import { Container } from "@/src/shared/ui/Contianer";
import { useColors, SIZES } from "@/src/shared/utils";
import { P } from "@/src/shared/ui/Texts";
import { EditIcon } from "@/src/shared/icons";
import { HeadWithParagraph } from "@/src/entities/HeadWithParagraph";
import { useRouter } from "expo-router";
import { Button } from "@/src/shared/ui/Button";
import { singout } from "../api/signout";
import { getData } from "@/src/shared/utils/storeData";
import { useEffect, useState } from "react";
import { editClient } from "@/src/shared/api/invalid/edit";
import { editStaff } from "@/src/shared/api/volunteer/edit";
import { getClient } from "@/src/shared/api/invalid/get";
import { getStaff } from "@/src/shared/api/volunteer/get";

interface IProfile {
  varinat: "volunteer" | "invalid";
}

interface IUser {
  avatar: null | string;
  born_at: null | string;
  description: null | string;
  first_name: null | string;
  id: number;
  iin: null | string;
  last_name: null | string;
  photo: null | string;
  sur_name: null | string;
  user_id: number;
  user_username: string;
}
interface IClient {
  avatar: null | string;
  born_at: null | string;
  description: null | string;
  first_name: null | string;
  id: number;
  iin: null | string;
  last_name: null | string;
  photo: null | string;
  sur_name: null | string;
  user_id: number;
  user_username: string;
  address: string;
  illnesses: string[];
}

const Profile = ({ varinat }: IProfile) => {
  const [data, setData] = useState<IUser[]>();
  const [client, setClient] = useState<IClient[]>();
  const COLORS = useColors();
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);

  const handelSignout = async () => {
    const refresh = await getData("refresh");
    if (refresh) {
      await singout(refresh);
    }
    router.push("/");
  };

  // useEffect(() => {
  //   handleGet();
  // }, []);

  // const handleGet = async () => {
  //   if (varinat === "invalid") {
  //     const clientData = await getClient();
  //     setData(clientData.data);
  //     setClient(clientData.data);
  //   } else if (varinat === "volunteer") {
  //     const staffData = await getStaff();
  //     setData(staffData.data);
  //   }
  // };

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
            {varinat === "volunteer" ? (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Image
                  source={require("../../../shared/assets/me.jpeg")}
                  style={{
                    borderRadius: 1000,
                    width: 100,
                    height: 100,
                  }}
                />
              </View>
            ) : (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Image
                  source={require("../../../shared/assets/dan.jpeg")}
                  style={{
                    borderRadius: 1000,
                    width: 100,
                    height: 100,
                  }}
                />
              </View>
            )}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <P
                size="large"
                text={
                  "lol"
                  // data
                  //   ? `${
                  //       data[0].first_name === null ? "" : data[0]?.first_name
                  //     } ${data[0].last_name === null ? "" : data[0].last_name}`
                  //   : ""
                }
              />
              <TouchableOpacity onPress={() => setIsEdit(!isEdit)}>
                <EditIcon color={COLORS.secondary} />
              </TouchableOpacity>
            </View>
            {varinat === "volunteer" ? null : (
              <>
                <HeadWithParagraph
                  head="Местоположение:"
                  paragraph={client ? client[0].address : ""}
                  pweight="500"
                />
                <P size="medium" text="Болячки" />
                {client
                  ? client[0].illnesses.map((il) => (
                      <P key={il} size="regular" fontWight="400" text={il} />
                    ))
                  : ""}
              </>
            )}
            <HeadWithParagraph
              head="O себе"
              paragraph={
                data
                  ? data[0].description === null
                    ? ""
                    : data[0].description
                  : ""
              }
              pweight="400"
            />
            {/* <HeadWithParagraph
              head="Аккаунт подтверждён:"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
              pweight="400"
            /> */}
            <Button
              padVer={10}
              padHor={20}
              onPress={() => {
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
