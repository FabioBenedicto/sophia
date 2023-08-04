import React, { useState } from "react";
import { View, Image, TouchableOpacity, Alert } from "react-native";

import { Container } from "../../components/Container";
import { MyLockerText } from "../../components/MyLockerText";
import { MyLockerTextInput } from "../../components/MyLockerTextInput";
import { Button } from "../../components/Button";

import { styles } from "./syles";

import MyLockerLogo from '../../assets/MyLockerLogo.png';
import MyLockerLogoPaintedWhite from '../../assets/ShortLogoWhite.png';

import { GLOBAL } from "../../themes/global";
import { DARK } from "../../themes/dark";
import { LIGHT } from "../../themes/light";

export function LoginScreen() {
    const [darkTheme, setDarkTheme] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loginWithEmailSucceed, setLoginWithEmailSucceed] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const handleEmailVerification = () => {
        const requestBody = {
            email,
        };
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setLoginWithEmailSucceed(true);
        }, 3000)
    }

    const forgotEmailToast = () => {
        Alert.alert('Esqueceu seu e-mail', 'Seu email institucional segue o seguinte formato: "clRA@g.unicamp.br"', [{ text: 'Ok' }])
    }


    const handlePasswordVerification = async () => {
        const requestBody = {
            email,
            password,
        };
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setLoginWithEmailSucceed(false);
        }, 3000)
    }

    return (
        <Container>
            <Image source={darkTheme ? MyLockerLogoPaintedWhite : MyLockerLogo} style={styles.logo} />
            <View style={styles.containerWithoutLogo}>
                <View style={styles.textContainer}>
                    <MyLockerText fontSize={GLOBAL.FONT_SIZE.LG} color={darkTheme ? DARK.COLORS.TEXT_PRIMARY : LIGHT.COLORS.TEXT_PRIMARY}>
                        Entrar
                    </MyLockerText>
                    <MyLockerText color={darkTheme ? DARK.COLORS.TEXT_SECONDARY : LIGHT.COLORS.TEXT_SECONDARY}>
                        {loginWithEmailSucceed ? 'Digite sua senha para fazer login' : 'Digite seu e-mail da Unicamp'}
                    </MyLockerText>
                </View>
                {
                    loginWithEmailSucceed
                        ? <>
                            <MyLockerTextInput
                                value={email}
                                isEditable={false}
                                darkTheme={darkTheme}
                            />
                            <View style={styles.inputPasswordContainer}>
                                <MyLockerTextInput
                                    isPasswordTextInput
                                    darkTheme={darkTheme}     
                                    value={password}
                                    onChangeText={(text) => { setPassword(text);}}
                                    placeholder="Senha" 
                                />
                            </View>
                        </>
                        : <MyLockerTextInput
                            darkTheme={darkTheme}
                            value={email}
                            onChangeText={(text) => { setEmail(text);}}
                            placeholder="E-mail institucional"
                            autoCapitalize='none'
                        />

                }
                <TouchableOpacity onPress={loginWithEmailSucceed ? undefined : forgotEmailToast} activeOpacity={1} style={styles.linkContainer} >
                    <MyLockerText color={darkTheme ? DARK.COLORS.TEXT_LINK : LIGHT.COLORS.TEXT_LINK}>
                        {loginWithEmailSucceed ? 'Esqueceu sua senha?' : 'Esqueceu seu e-mail?'}
                    </MyLockerText>
                </TouchableOpacity>
            </View>
            <Button loading={loading} darkTheme={darkTheme} onPress={loginWithEmailSucceed ? handlePasswordVerification : handleEmailVerification}>
                Continuar
            </Button>
        </Container >
    )
}