import { View } from "react-native";
import { Button } from "@/src/shared/ui/Button";
import { InputWithLabel } from "@/src/entities/InputWithLabel";
import { useState } from "react";
import { COLORS, SIZES } from "@/src/shared/utils";
import { MarkText } from "@/src/shared/ui/MarkText";
import { router } from "expo-router";
import { singup } from "../api/signup";
import { singin } from "../api/signin";
import { P } from "@/src/shared/ui/Texts";
import { storeData } from "@/src/shared/utils/storeData";

interface IAuthOption {
  variant: boolean;
}

const AuthOption = ({ variant }: IAuthOption) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onClickAuth = async () => {
    setPhone("");
    setPassword("");
    setConfirmPassword("");
    setErrorMessage("");
    if (!phone.trim() || !password.trim()) {
      setErrorMessage("Заполни поля кожаный ублюдок");
      setShowError(true);
      return;
    }
    if (!/^\S{8,}$/.test(password)) {
      setErrorMessage("Пароль должен содержать 8 символв кожаный ублюдок");
      setShowError(true);
      return;
    }

    if (variant) {
      const loginres = await singin({ phone, password });
      if (loginres === "400: Неверный пароль!") {
        setShowError(true);
        setErrorMessage("Введите поля корректно");
      }
      if (loginres === 200) {
        if (true) {
          router.push("/volunteer/(tabs)/main");
        } else {
          router.push("/invalid/(tabs)/main");
        }
      }
    } else {
      if (password !== confirmPassword) {
        setErrorMessage("Пароли должны быть одинаковы кожаный ублюдок");
        setShowError(true);
        return;
      }
      const regres = await singup({ phone, password });
      if (regres === "400: Пользовать с такими данными уже существует!") {
        setErrorMessage(regres.slice("400: ".length));
        setShowError(true);
        return;
      }
      console.log(regres);
      if (regres === "Пользователь зарегистрирован успешно!") {
        storeData({ name: "phone", storeData: phone });
        router.push("/register/");
      }
    }
  };

  return (
    <View style={{ gap: SIZES.medium }}>
      <InputWithLabel
        value={phone}
        onChange={setPhone}
        placeholder="+77057315777"
        label="Номер"
        variant="auth"
      />
      <View style={{ gap: 8 }}>
        <InputWithLabel
          value={password}
          type="password"
          onChange={setPassword}
          placeholder="******"
          label={variant ? "Пароль" : "Придумайте пароль"}
          variant="auth"
        />
        {variant ? <MarkText text="Забыли пароль ?" /> : null}
      </View>
      {variant ? null : (
        <InputWithLabel
          type="password"
          value={confirmPassword}
          onChange={setConfirmPassword}
          placeholder="******"
          label="Повторите пароль"
          variant="auth"
        />
      )}
      {showError ? (
        <P text={errorMessage} size="regular" isCenter color={COLORS.wrong} />
      ) : null}
      <Button
        varinat="auth"
        onPress={onClickAuth}
        text={variant ? "Войти" : "Регситрация"}
      />
      <MarkText text="Пользовательское соглашение" underline textCenter />
    </View>
  );
};

export default AuthOption;
