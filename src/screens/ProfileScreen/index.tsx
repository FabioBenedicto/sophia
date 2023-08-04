import React, { useState } from "react";
import { View, Image, ScrollView, Text } from "react-native";

import { Header } from "../../components/Header";

import { MyLockerText } from "../../components/MyLockerText";
import { Button } from "../../components/Button";

import DefaultProfilePicture from '../../assets/DefaultProfilePicture.jpg'
import NoLockersFounded from '../../assets/NoLockersFounded.png'

import { Gear } from "phosphor-react-native";

import { GLOBAL } from "../../themes/global";
import { DARK } from "../../themes/dark";
import { LIGHT } from "../../themes/light";

import { styles } from "./styles";
import { Locker } from "../../components/Locker";


export function ProfileScreen() {
    const [user, setUser] = useState();
    const [darkTheme, setDarkTheme] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const haveLocker = true;
    return (
        <View style={styles.container}>
            <View style={[styles.headerContainer, { backgroundColor: GLOBAL.COLORS.BACKGROUND_HEADER_WITH_NO_LOCKER }]}>
                <Gear size={GLOBAL.FONT_SIZE.MD} style={styles.headerIcon} color="#002147" weight="fill" />
            </View>
            <View style={styles.containerWithoutHeader}>
                <View style={styles.userContainer}>
                    <View style={styles.userDataContainer}>
                        <Image source={DefaultProfilePicture} style={styles.profileImage} />
                        <View style={styles.userDataTextContainer}>
                            <MyLockerText numberOfLines={1} fontSize={GLOBAL.FONT_SIZE.LG} color={darkTheme ? DARK.COLORS.TEXT_PRIMARY : LIGHT.COLORS.TEXT_PRIMARY}>First and Last Nameeee</MyLockerText>
                            <MyLockerText numberOfLines={1} fontSize={GLOBAL.FONT_SIZE.MD} color={darkTheme ? DARK.COLORS.TEXT_SECONDARY : LIGHT.COLORS.TEXT_SECONDARY}>email@g.unicamp.br</MyLockerText>
                        </View>
                    </View>
                    <View style={styles.userLockerContainer}>
                        <MyLockerText fontWeight={GLOBAL.FONT_WEIGHT.BOLD} fontSize={GLOBAL.FONT_SIZE.LG} color={darkTheme ? DARK.COLORS.TEXT_PRIMARY : LIGHT.COLORS.TEXT_PRIMARY}>Meu armário</MyLockerText>
                        <View style={[styles.line, {marginBottom: haveLocker ? 32 : 40}]} />
                        <View style={{ alignItems: 'center', width: '100%' }}>
                            {
                                !haveLocker
                                    ? <Locker number="000" rentedAt="16/07/2023" darkTheme={darkTheme} />
                                    : (
                                        <View style={styles.imageContainer}>
                                            <Image style={styles.userLockerContainerImage} source={NoLockersFounded} />
                                            <MyLockerText fontWeight={GLOBAL.FONT_WEIGHT.MEDIUM} fontSize={GLOBAL.FONT_SIZE.MD} color={darkTheme ? DARK.COLORS.TEXT_SECONDARY : LIGHT.COLORS.TEXT_SECONDARY}>Nenhum armário alugado</MyLockerText>
                                        </View>
                                    )
                            }
                        </View>
                    </View>
                </View>

                <Button loading={loading} darkTheme={darkTheme}>
                    Alugar um armário
                </Button>
            </View>
        </View>
    )
}