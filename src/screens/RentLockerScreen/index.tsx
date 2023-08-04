import React, { useRef, useState } from "react";
import { ScrollView, View, Image, Text, TouchableOpacity } from "react-native";

import { MyLockerText, MyLockerTextProps } from "../../components/MyLockerText";

import LockerContainerYellow from '../../assets/LockerContainerYellow.png';
import LockerContainerRed from '../../assets/LockerContainerRed.png';
import LockerContainerGreen from '../../assets/LockerContainerGreen.png';
import LockerContainerBlue from '../../assets/LockerContainerBlue.png';

import { GLOBAL } from "../../themes/global";
import { DARK } from "../../themes/dark";
import { LIGHT } from "../../themes/light";

import { styles } from "./styles";

export function RentLockerScreen() {
    const darkTheme = false;
    const testeRef = useRef(null);
    const [margin, setMargin] = useState<number>(0);
    const [width, setWidth] = useState<number>();
    const myLockerTextRef = useRef<any>();
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <MyLockerText textAlign="center" fontWeight={GLOBAL.FONT_WEIGHT.BOLD} fontSize={GLOBAL.FONT_SIZE.LG} color={darkTheme ? DARK.COLORS.TEXT_PRIMARY : LIGHT.COLORS.TEXT_PRIMARY}>Alugue um armário</MyLockerText>
                <MyLockerText textAlign="center" color={darkTheme ? DARK.COLORS.TEXT_SECONDARY : LIGHT.COLORS.TEXT_SECONDARY}>Selecione o bloco de armários que você deseja.</MyLockerText>
            </View>
            <ScrollView horizontal style={styles.scroll} showsHorizontalScrollIndicator={false} onS>
                <View style={styles.scrollContent}>
                    <View style={[styles.lockerRow, { marginBottom: 20 }]}>
                        <View style={styles.lockersContainerYellow}>
                            <View style={[styles.lockerContainerWithOneRoom, { marginLeft: margin }]}>
                                <View onLayout={(event) => { setMargin((event.nativeEvent.layout.height - event.nativeEvent.layout.width) / 2); }} style={styles.textRotated}>
                                    <MyLockerText fontWeight={GLOBAL.FONT_WEIGHT.MEDIUM} fontSize={GLOBAL.FONT_SIZE.LG} color={darkTheme ? DARK.COLORS.TEXT_PRIMARY : LIGHT.COLORS.TEXT_PRIMARY}>Sala 10</MyLockerText>
                                </View>
                                <Image source={LockerContainerYellow} style={{ height: 186, width: 186, marginLeft: margin + 20, resizeMode: 'stretch', backgroundColor: 'yellow' }} />
                            </View>
                            <View style={[styles.lockerContainerWithTwoRoom, { marginLeft: margin + 20 }]}>
                                <View onLayout={(event) => { setMargin((event.nativeEvent.layout.height - event.nativeEvent.layout.width) / 2); }} style={styles.textRotated}>
                                    <MyLockerText fontWeight={GLOBAL.FONT_WEIGHT.MEDIUM} fontSize={GLOBAL.FONT_SIZE.LG} color={darkTheme ? DARK.COLORS.TEXT_PRIMARY : LIGHT.COLORS.TEXT_PRIMARY}>Sala 11</MyLockerText>
                                </View>
                                <Image source={LockerContainerYellow} style={{ height: 186, width: 186, marginLeft: margin + 20, resizeMode: 'stretch', backgroundColor: 'yellow' }} />
                                <View onLayout={(event) => { setMargin((event.nativeEvent.layout.height - event.nativeEvent.layout.width) / 2); }} style={styles.textRotated}>
                                    <MyLockerText fontWeight={GLOBAL.FONT_WEIGHT.MEDIUM} fontSize={GLOBAL.FONT_SIZE.LG} color={darkTheme ? DARK.COLORS.TEXT_PRIMARY : LIGHT.COLORS.TEXT_PRIMARY}>Sala 12</MyLockerText>
                                </View>
                            </View>
                        </View>

                        <View style={styles.lockersContainerRed}>
                            <View style={[styles.lockerContainerWithOneRoom, { marginLeft: margin + 20 }]}>
                                <View onLayout={(event) => { setMargin((event.nativeEvent.layout.height - event.nativeEvent.layout.width) / 2); }} style={styles.textRotated}>
                                    <MyLockerText fontWeight={GLOBAL.FONT_WEIGHT.MEDIUM} fontSize={GLOBAL.FONT_SIZE.LG} color={darkTheme ? DARK.COLORS.TEXT_PRIMARY : LIGHT.COLORS.TEXT_PRIMARY}>Saúde</MyLockerText>
                                </View>
                                <Image source={LockerContainerRed} style={{ height: 186, width: 186, marginLeft: margin + 20, resizeMode: 'stretch', backgroundColor: 'yellow' }} />
                            </View>
                            <View style={styles.lockerContainerWithOneRoom}>
                                <View onLayout={(event) => { setMargin((event.nativeEvent.layout.height - event.nativeEvent.layout.width) / 2); }} style={styles.textRotated}>
                                    <MyLockerText fontWeight={GLOBAL.FONT_WEIGHT.MEDIUM} fontSize={GLOBAL.FONT_SIZE.LG} color={darkTheme ? DARK.COLORS.TEXT_PRIMARY : LIGHT.COLORS.TEXT_PRIMARY}>Sala 13</MyLockerText>
                                </View>
                                <Image source={LockerContainerRed} style={{ height: 186, width: 186, marginLeft: margin + 20, resizeMode: 'stretch', backgroundColor: 'yellow' }} />
                            </View>
                            <View style={styles.lockerContainerWithTwoRoom}>
                                <View onLayout={(event) => { setMargin((event.nativeEvent.layout.height - event.nativeEvent.layout.width) / 2); }} style={styles.textRotated}>
                                    <MyLockerText fontWeight={GLOBAL.FONT_WEIGHT.MEDIUM} fontSize={GLOBAL.FONT_SIZE.LG} color={darkTheme ? DARK.COLORS.TEXT_PRIMARY : LIGHT.COLORS.TEXT_PRIMARY}>Sala 14</MyLockerText>
                                </View>
                                <Image source={LockerContainerRed} style={{ height: 186, width: 186, marginLeft: margin, resizeMode: 'stretch', backgroundColor: 'yellow' }} />
                                <View onLayout={(event) => { setMargin((event.nativeEvent.layout.height - event.nativeEvent.layout.width) / 2); }} style={styles.textRotated}>
                                    <MyLockerText fontWeight={GLOBAL.FONT_WEIGHT.MEDIUM} fontSize={GLOBAL.FONT_SIZE.LG} color={darkTheme ? DARK.COLORS.TEXT_PRIMARY : LIGHT.COLORS.TEXT_PRIMARY}>Sala 15</MyLockerText>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.lockerRow}>
                        <View style={styles.lockersContainerGreen}>
                            <View style={styles.lockerContainerWithTwoRoom}>
                                <View onLayout={(event) => { setMargin((event.nativeEvent.layout.height - event.nativeEvent.layout.width) / 2); }} style={styles.textRotated}>
                                    <MyLockerText fontWeight={GLOBAL.FONT_WEIGHT.MEDIUM} fontSize={GLOBAL.FONT_SIZE.LG} color={darkTheme ? DARK.COLORS.TEXT_PRIMARY : LIGHT.COLORS.TEXT_PRIMARY}>Sala 2</MyLockerText>
                                </View>
                                <Image source={LockerContainerGreen} style={{ height: 186, width: 186, marginLeft: width, resizeMode: 'stretch', backgroundColor: 'yellow' }} />
                                <View onLayout={(event) => { setMargin((event.nativeEvent.layout.height - event.nativeEvent.layout.width) / 2); }} style={styles.textRotated}>
                                    <MyLockerText fontWeight={GLOBAL.FONT_WEIGHT.MEDIUM} fontSize={GLOBAL.FONT_SIZE.LG} color={darkTheme ? DARK.COLORS.TEXT_PRIMARY : LIGHT.COLORS.TEXT_PRIMARY}>Sala 3</MyLockerText>
                                </View>
                            </View>
                        </View>

                        <View style={styles.lockersContainerBlue}>
                            <View style={styles.lockerContainerWithOneRoom}>
                                <View onLayout={(event) => { setMargin((event.nativeEvent.layout.height - event.nativeEvent.layout.width) / 2); }} style={styles.textRotated}>
                                    <MyLockerText fontWeight={GLOBAL.FONT_WEIGHT.MEDIUM} fontSize={GLOBAL.FONT_SIZE.LG} color={darkTheme ? DARK.COLORS.TEXT_PRIMARY : LIGHT.COLORS.TEXT_PRIMARY}>Vestiário masculino</MyLockerText>
                                </View>
                                <Image source={LockerContainerBlue} style={{ height: 186, width: 186, marginLeft: width, resizeMode: 'stretch', backgroundColor: 'yellow' }} />
                            </View>
                            <View style={styles.lockerContainerWithTwoRoom}>
                                <View onLayout={(event) => { setMargin((event.nativeEvent.layout.height - event.nativeEvent.layout.width) / 2); }} style={styles.textRotated}>
                                    <MyLockerText fontWeight={GLOBAL.FONT_WEIGHT.MEDIUM} fontSize={GLOBAL.FONT_SIZE.LG} color={darkTheme ? DARK.COLORS.TEXT_PRIMARY : LIGHT.COLORS.TEXT_PRIMARY}>Sala 4</MyLockerText>
                                </View>
                                <Image source={LockerContainerBlue} style={{ height: 186, width: 186, marginLeft: width, resizeMode: 'stretch', backgroundColor: 'yellow' }} />
                                <View onLayout={(event) => { setMargin((event.nativeEvent.layout.height - event.nativeEvent.layout.width) / 2); }} style={styles.textRotated}>
                                    <MyLockerText fontWeight={GLOBAL.FONT_WEIGHT.MEDIUM} fontSize={GLOBAL.FONT_SIZE.LG} color={darkTheme ? DARK.COLORS.TEXT_PRIMARY : LIGHT.COLORS.TEXT_PRIMARY}>Sala 5</MyLockerText>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}