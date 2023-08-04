import React from "react";
import { View } from "react-native";

import { Gear } from "phosphor-react-native";

import { GLOBAL } from "../../themes/global";

import {styles} from './styles'

export interface HeaderProps{
    backgroundColor: string
}

export function Header({backgroundColor} : HeaderProps){
    return(
        <View style={[styles.container, {backgroundColor: backgroundColor}]}>
            <Gear size={GLOBAL.FONT_SIZE.MD} style={styles.icon}/>
        </View>
    )
}