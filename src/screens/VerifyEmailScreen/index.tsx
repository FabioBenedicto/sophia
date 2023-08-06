import React, { useEffect, useRef, useState } from "react";
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
import { MyLockerCharInput, MyLockerCharInputProps } from "../../components/MyLockerCharInput";
import { TextInput } from "react-native-gesture-handler";

export function VerifyEmailScreen() {
    const darkTheme = false;
    const loading = false;

    const ALLOWED_CHARACTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 'r', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    const [input1Value, setInput1Value] = useState('');
    const [input2Value, setInput2Value] = useState('');
    const [input3Value, setInput3Value] = useState('');
    const [input4Value, setInput4Value] = useState('');
    const [input5Value, setInput5Value] = useState('');
    const [input6Value, setInput6Value] = useState('');

    const inputs: TextInput = [useRef<TextInput>(), useRef<TextInput>(), useRef<TextInput>(), useRef<TextInput>(), useRef<TextInput>(), useRef<TextInput>()];
    const input1Ref = useRef<TextInput>(null);
    
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
    };

    const handleKeyPress = (e, value) => {
        if (ALLOWED_CHARACTERS.includes(e.nativeEvent.key.toLowerCase())) {
            if (value != 5) {
                inputs[++value].current.focus();
            } else {
                setHowManyTimesDelete(0);
                Keyboard.dismiss();
            }
        }
        if (e.nativeEvent.key == 'Backspace') {
            if (value == 0) {
                Keyboard.dismiss();
                return;
            }

            if (value != 5 || howManyTimesDelete == 1) {
                inputs[--value].current.clear();
                inputs[value].current.focus();
                setHowManyTimesDelete(0);
            } else {
                setHowManyTimesDelete(1);
            }
        }
        console.log(howManyTimesDelete);
    };
    
    return (
        <Container>
            <Image source={darkTheme ? MyLockerLogoPaintedWhite : MyLockerLogo} style={styles.logo} />
            <View style={styles.inputContainerWithTextContainer}>
                <View style={styles.textContainer}>
                    <MyLockerText fontSize={GLOBAL.FONT_SIZE.LG} color={darkTheme ? DARK.COLORS.TEXT_PRIMARY : LIGHT.COLORS.TEXT_PRIMARY}>Criar senha</MyLockerText>
                    <MyLockerText fontSize={GLOBAL.FONT_SIZE.MD} color={darkTheme ? DARK.COLORS.TEXT_SECONDARY : LIGHT.COLORS.TEXT_SECONDARY}>Crie uma senha para sua conta</MyLockerText>
                </View>
                <ScrollView style={styles.inputContainer} horizontal showsHorizontalScrollIndicator={false} bounces={false}>
                    <View style={[styles.myLockerCharInput, { marginLeft: 10 }]}>
                        <MyLockerCharInput
                            value={input1Value}
                            onChangeText={(text) => setInput1Value(text)} onKeyPress={(e) => handleKeyPress(e, 0)}
                            ref={input1Ref}
                        />
                    </View>
                    <View style={styles.myLockerCharInput}>
                        <MyLockerCharInput
                            value={input2Value}
                            onChangeText={(text) => setInput2Value(text)} onKeyPress={(e) => handleKeyPress(e, 1)}
                            ref={inputs[1]}
                        />
                    </View>
                    <View style={styles.myLockerCharInput}>
                        <MyLockerCharInput
                            value={input3Value}
                            onChangeText={(text) => setInput3Value(text)} onKeyPress={(e) => handleKeyPress(e, 2)}
                            ref={inputs[2]}
                        />
                    </View>
                    <View style={styles.myLockerCharInput}>
                        <MyLockerCharInput
                            value={input4Value}
                            onChangeText={(text) => setInput4Value(text)} onKeyPress={(e) => handleKeyPress(e, 3)}
                            ref={inputs[3]}
                        />
                    </View>
                    <View style={styles.myLockerCharInput}>
                        <MyLockerCharInput
                            value={input5Value}
                            onChangeText={(text) => setInput5Value(text)} onKeyPress={(e) => handleKeyPress(e, 4)}
                            ref={inputs[4]}
                        />
                    </View>
                    <View style={{ marginRight: 1, marginVertical: 5 }}>
                        <MyLockerCharInput
                            value={input6Value}
                            onChangeText={(text) => setInput6Value(text)} onKeyPress={(e) => handleKeyPress(e, 5)}
                            ref={inputs[5]}
                        />
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