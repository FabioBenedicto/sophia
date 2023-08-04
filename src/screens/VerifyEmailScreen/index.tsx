import React from "react";
import { View, Image, ScrollView, TouchableOpacity } from "react-native";

import MyLockerLogo from '../../assets/MyLockerLogo.png';
import MyLockerLogoPaintedWhite from '../../assets/ShortLogoWhite.png';

import { styles } from "./styles";

import { Container } from "../../components/Container";
import { MyLockerText } from "../../components/MyLockerText";
import { MyLockerTextInput } from "../../components/MyLockerTextInput";
import { Button } from "../../components/Button";

import { GLOBAL } from "../../themes/global";
import { DARK } from "../../themes/dark";
import { LIGHT } from "../../themes/light";
import { MyLockerCharInput } from "../../components/MyLockerCharInput";

export function VerifyEmailScreen() {
    const darkTheme = false;
    const loading = false;

    function handleCodeResubmit() {
        const requestBody = {
          email: user.email,
        }
    
        toast.loading('Reenviando código...')
    
        api
          .put('/students/generate-code', requestBody)
          .then((response: AxiosResponse) => {
            const { randomCode } = response.data
            setUser({ ...user, code: randomCode })
            toast.dismiss()
            toast.success('Código reenviado!')
          })
          .catch(err => {
            toast.error(err.response.data.erro)
          })
      }

    return (
        <Container>
            <Image source={darkTheme ? MyLockerLogoPaintedWhite : MyLockerLogo} style={styles.logo} />
            <View style={styles.inputContainerWithTextContainer}>
                <View style={styles.textContainer}>
                    <MyLockerText fontSize={GLOBAL.FONT_SIZE.LG} color={darkTheme ? DARK.COLORS.TEXT_PRIMARY : LIGHT.COLORS.TEXT_PRIMARY}>Criar senha</MyLockerText>
                    <MyLockerText fontSize={GLOBAL.FONT_SIZE.MD} color={darkTheme ? DARK.COLORS.TEXT_SECONDARY : LIGHT.COLORS.TEXT_SECONDARY}>Crie uma senha para sua conta</MyLockerText>
                </View>
                <ScrollView style={styles.inputContainer} horizontal showsHorizontalScrollIndicator={false} bounces={false}>
                    <View style={[styles.myLockerCharInput, {marginLeft: 10}]}>
                        <MyLockerCharInput />
                    </View>
                    <View style={styles.myLockerCharInput}>
                        <MyLockerCharInput />
                    </View>
                    <View style={styles.myLockerCharInput}>
                        <MyLockerCharInput />
                    </View>
                    <View style={styles.myLockerCharInput}>
                        <MyLockerCharInput />
                    </View>
                    <View style={styles.myLockerCharInput}>
                        <MyLockerCharInput />
                    </View>
                    <View style={{marginRight: 1, marginVertical: 5}}>
                    <MyLockerCharInput />
                    </View>
                </ScrollView>
                <TouchableOpacity onPress={handleCodeResubmit} activeOpacity={1} style={styles.linkContainer} >
                    <MyLockerText color={darkTheme ? DARK.COLORS.TEXT_LINK : LIGHT.COLORS.TEXT_LINK}>
                        Reenviar código
                    </MyLockerText>
                </TouchableOpacity>
            </View>
            <Button loading={loading} darkTheme={darkTheme}>
                Continuar
            </Button>
        </Container >
    )
}