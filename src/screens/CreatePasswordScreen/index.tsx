import React, { useState } from "react";
import { View, Image, Alert} from "react-native";

import { Container } from "../../components/Container";
import { MyLockerText } from "../../components/MyLockerText";
import { MyLockerTextInput } from "../../components/MyLockerTextInput";
import { Button } from "../../components/Button";

import { styles } from "./styles";

import MyLockerLogo from '../../assets/MyLockerLogo.png';
import MyLockerLogoPaintedWhite from '../../assets/ShortLogoWhite.png';

import { GLOBAL } from "../../themes/global";
import { DARK } from "../../themes/dark";
import { LIGHT } from "../../themes/light";


export function CreatePasswordScreen() {
    const [darkTheme, setDarkTheme] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleCreatePassword = () => {
        const regex = new RegExp(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/)
        const passwordHasLettersAndNumbers = regex.test(password)
        if (!passwordHasLettersAndNumbers) {
            Alert.alert('Senha não cumpre as regras', 'Sua senha deve conter numeros, letras minusculas e letras maiusculas', [{ text: 'Ok' }])
            return
          }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }


    return (
        <Container>
            <Image
                source={darkTheme
                    ? MyLockerLogoPaintedWhite
                    : MyLockerLogo}
                style={styles.logo}
            />
            <View style={styles.containerWithoutLogo}>
                <View style={styles.textContainer}>
                    <MyLockerText
                        fontSize={GLOBAL.FONT_SIZE.LG}
                        color={darkTheme
                            ? DARK.COLORS.TEXT_PRIMARY
                            : LIGHT.COLORS.TEXT_PRIMARY}
                    >
                        Criar senha
                    </MyLockerText>
                    <MyLockerText
                        color={darkTheme
                            ? DARK.COLORS.TEXT_SECONDARY
                            : LIGHT.COLORS.TEXT_SECONDARY}
                    >
                        Crie uma senha para sua conta
                    </MyLockerText>
                </View>
                <View style={styles.inputPassword}>
                    <MyLockerTextInput
                        isPasswordTextInput={true}
                        darkTheme={darkTheme}
                        value={password}
                        onChangeText={(text) => {setPassword(text);}}
                        placeholder="Senha"
                    />
                </View>
                <MyLockerTextInput
                    isPasswordTextInput={true}
                    darkTheme={darkTheme}
                    value={passwordConfirmation}
                    onChangeText={(text) => {setPasswordConfirmation(text);}}
                    placeholder="Confirmar Senha"
                />
            </View>
            <Button
                loading={loading}
                darkTheme={darkTheme}
                onPress={handleCreatePassword}
            >
                Continuar
            </Button>
        </Container>
    )
}