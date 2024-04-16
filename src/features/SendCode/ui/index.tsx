import { P } from "@/src/shared/ui/Texts";
import { COLORS, SIZES } from "@/src/shared/utils";
import { OTPInputField } from "@/src/entities/OTPInputField";
import { Button } from "@/src/shared/ui/Button";
import { Keyboard, Pressable, View } from "react-native";
import { getData, storeData } from "@/src/shared/utils/storeData";
import { useEffect, useState } from "react";
import { verify } from "../api/verify";
import { sendSMS } from "../api/sendSMS";
import { useRouter } from "expo-router";

const SendCode = () => {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [pinReady, setPinReady] = useState(false);
  const [errorMessage, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const router = useRouter();
  const codeLength = 6;
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
      <View style={{ flexDirection: "column", gap: SIZES.medium }}>
        <P text="Ввeдите код " isCenter size="large" color={COLORS.contrat} />
        {showMessage ? (
          <P text={errorMessage} size="regular" isCenter color={COLORS.wrong} />
        ) : null}
        <OTPInputField
          setCode={setCode}
          code={code}
          setPinReady={setPinReady}
          maxLength={codeLength}
        />
        {pinReady ? (
          <Button
            onPress={onPressVerify}
            color="secondary"
            textSize="medium"
            text="Потвердить"
            padVer={10}
            padHor={20}
          />
        ) : (
          <View
            style={{
              alignItems: "center",
              backgroundColor: COLORS.secondary,
              borderRadius: SIZES.light,
              paddingHorizontal: 5,
              paddingVertical: 10,
              opacity: 0.7,
            }}
          >
            <P size="medium" color={COLORS.contrat} text="Потвердить" />
          </View>
        )}
      </View>
    </Pressable>
  );
};

export default SendCode;
