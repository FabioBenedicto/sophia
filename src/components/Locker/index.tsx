import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

import { MyLockerText } from "../MyLockerText";

import LockerImage from "../../assets/LockerImage.png"

import { GLOBAL } from "../../themes/global";
import { DARK } from "../../themes/dark";
import { LIGHT } from "../../themes/light";

import { styles } from "./styles";
import { Container } from "../Container";

export interface LockerProps extends TouchableOpacityProps{
    number: string;
    rentedAt: string;
    darkTheme: boolean;
}

export function Locker({number, rentedAt, darkTheme, ...props} : LockerProps){
    const [isVisible, setIsVisible] = useState(false);
    return(
        <TouchableOpacity {...props} style={[styles.container, {backgroundColor: darkTheme ? DARK.COLORS.BACKGROUND_LOCKER_PANEL : LIGHT.COLORS.BACKGROUND_LOCKER_PANEL}]}>
            <Image style={styles.image} source={LockerImage}/>
            <View style={styles.textContainer}>
                <MyLockerText fontSize={GLOBAL.FONT_SIZE.LG} color={darkTheme ? DARK.COLORS.TEXT_PRIMARY : LIGHT.COLORS.TEXT_PRIMARY}>{`Armário ${number}`}</MyLockerText>
                <MyLockerText fontSize={GLOBAL.FONT_SIZE.SM} color={darkTheme ? DARK.COLORS.TEXT_SECONDARY : LIGHT.COLORS.TEXT_SECONDARY}>{`Alugado em ${rentedAt}`}</MyLockerText>
            </View>
        </TouchableOpacity>   
    );
}