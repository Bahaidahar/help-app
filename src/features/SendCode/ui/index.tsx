import { P } from "@/src/shared/ui/Texts";
import { useColors, SIZES } from "@/src/shared/utils";
import { Button } from "@/src/shared/ui/Button";
import {
  Keyboard,
  Pressable,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { getData } from "@/src/shared/utils/storeData";
import { useEffect, useState } from "react";
import { verify } from "../api/verify";
import { sendSMS } from "../api/sendSMS";
import { useRouter } from "expo-router";
import { Container } from "@/src/shared/ui/Contianer";
import { MarkText } from "@/src/shared/ui/MarkText";

const SendCode = () => {
  const COLORS = useColors();
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [pinReady, setPinReady] = useState(false);
  const [errorMessage, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const router = useRouter();
  useEffect(() => {
    getPhone();
    handelSendSMS();
  }, []);
  const getPhone = async () => {
    const res = await getData("phone");
    if (res !== null && res !== undefined) {
      setPhone(res);
    }
  };

  const handelSendSMS = async () => {
    await sendSMS(phone);
  };

  const onPressVerify = async () => {
    const res = await verify(phone, code);
    console.log(res);
    if (res === "404: Код не был найден!") {
      setShowMessage(true);
      setMessage("Код не верно введен");
    } else {
      router.push("/auth");
    }
  };
  useEffect(() => {
    setPinReady(code.length === 6);
    return () => setPinReady(false);
  }, [code]);

  return (
    <Pressable
      style={{
        justifyContent: "center",
        padding: SIZES.semiMedium,
        alignItems: "center",
      }}
      onPress={() => {
        Keyboard.dismiss;
      }}
    >
      <Container size="big" verPad={24}>
        <View>
          <View
            style={{
              flexDirection: "column",
              gap: SIZES.light,
              alignItems: "center",
            }}
          >
            <P size="medium" text="Напишите код с СМС" />
            <P
              size="regular"
              fontWight="400"
              text={`Код выслан на номер: ${phone}
              `}
            />
          </View>
          <TextInput
            placeholder="******"
            value={code}
            onChangeText={setCode}
            maxLength={6}
            keyboardType="number-pad"
            returnKeyType="done"
            textContentType="oneTimeCode"
            style={{
              borderRadius: SIZES.light,
              borderColor: COLORS.primary,
              borderWidth: 1,
              paddingHorizontal: 15,
              paddingVertical: 8,
              fontWeight: "500",
              fontSize: SIZES.regular,
              backgroundColor: "rgba(0, 112, 213, 0.2)",
            }}
            placeholderTextColor="gray"
          />
          <View
            style={{
              flexDirection: "column",
              gap: SIZES.light,
              marginBottom: SIZES.medium,
              marginTop: SIZES.regular,
            }}
          >
            <TouchableOpacity>
              <MarkText text="СМС не пришла?" />
            </TouchableOpacity>
            <TouchableOpacity>
              <MarkText text="Указали не тот номер?" />
            </TouchableOpacity>
          </View>
          {showMessage ? (
            <P
              text={errorMessage}
              size="regular"
              isCenter
              color={COLORS.wrong}
            />
          ) : null}
          {pinReady ? (
            <Button
              onPress={onPressVerify}
              padVer={15}
              text="Потвердить"
              textSize="medium"
              color="secondary"
              textColor={COLORS.additional}
            />
          ) : (
            <View
              style={{
                alignItems: "center",
                backgroundColor: COLORS.secondary,
                borderRadius: SIZES.light,
                width: "100%",
                paddingVertical: 15,
                opacity: 0.7,
              }}
            >
              <P size="medium" color={COLORS.additional} text="Потвердить" />
            </View>
          )}
        </View>
      </Container>
    </Pressable>
  );
};

export default SendCode;
