import React, { useState } from "react";
import { styles } from "./styles";

import { ScrollView, View } from "react-native";
import { MyLockerText } from "../../components/MyLockerText";
import { Button } from "../../components/Button";
import { GLOBAL } from "../../themes/global";
import { DARK } from "../../themes/dark";
import { LIGHT } from "../../themes/light";
import { Locker } from "../../components/Locker";
import { Modal } from "../../components/Modal";

export function PaymentScreen() {
    const darkTheme = false;
    const [isVisible, setIsVisible] = useState(false);

    function handleLockerRent() {

    }

    return (
        <>
         {
            isVisible ? <Modal /> : null
        }
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <MyLockerText
                    fontWeight={GLOBAL.FONT_WEIGHT.BOLD}
                    fontSize={GLOBAL.FONT_SIZE.LG}
                    color={darkTheme
                        ? DARK.COLORS.TEXT_PRIMARY
                        : LIGHT.COLORS.TEXT_PRIMARY}
                    textAlign="center">
                    Alugue um Armário
                </MyLockerText>
                <MyLockerText
                    fontWeight={GLOBAL.FONT_WEIGHT.REGULAR}
                    fontSize={GLOBAL.FONT_SIZE.MD}
                    color={darkTheme
                        ? DARK.COLORS.TEXT_SECONDARY
                        : LIGHT.COLORS.TEXT_SECONDARY}
                    textAlign="center">
                    Revise seu pedido e realize o pagamento
                </MyLockerText>
            </View>
            <Locker onPress={() => { setIsVisible(!isVisible) }} number="000" rentedAt="21/11/2004" darkTheme={darkTheme} />
            <View style={styles.priceContainer}>
                <View style={[styles.priceLine, styles.priceSpacing]}>
                    <MyLockerText
                        fontWeight={GLOBAL.FONT_WEIGHT.REGULAR}
                        fontSize={GLOBAL.FONT_SIZE.LG}
                        color={darkTheme
                            ? DARK.COLORS.TEXT_PRIMARY
                            : LIGHT.COLORS.TEXT_PRIMARY}
                    >
                        Subtotal
                    </MyLockerText>
                    <MyLockerText
                        fontWeight={GLOBAL.FONT_WEIGHT.REGULAR}
                        fontSize={GLOBAL.FONT_SIZE.LG}
                        color={darkTheme
                            ? DARK.COLORS.TEXT_PRIMARY
                            : LIGHT.COLORS.TEXT_PRIMARY}
                    >
                        R$200,00
                    </MyLockerText>

                </View>
                <View style={[styles.priceLine, styles.priceSpacing]}>
                    <MyLockerText
                        fontWeight={GLOBAL.FONT_WEIGHT.REGULAR}
                        fontSize={GLOBAL.FONT_SIZE.MD}
                        color={darkTheme
                            ? DARK.COLORS.TEXT_SECONDARY
                            : LIGHT.COLORS.TEXT_SECONDARY}
                    >
                        Subtotal
                    </MyLockerText>
                    <MyLockerText
                        fontWeight={GLOBAL.FONT_WEIGHT.REGULAR}
                        fontSize={GLOBAL.FONT_SIZE.MD}
                        color={darkTheme
                            ? DARK.COLORS.TEXT_SECONDARY
                            : LIGHT.COLORS.TEXT_SECONDARY}
                    >
                        (50%) - R$100,00
                    </MyLockerText>
                </View>
                <View style={[styles.line, styles.priceSpacing, { backgroundColor: darkTheme ? DARK.COLORS.TEXT_SECONDARY : LIGHT.COLORS.TEXT_SECONDARY }]} />
                <View style={styles.priceLine}>
                    <MyLockerText
                        fontWeight={GLOBAL.FONT_WEIGHT.REGULAR}
                        fontSize={GLOBAL.FONT_SIZE.LG}
                        color={darkTheme
                            ? DARK.COLORS.TEXT_PRIMARY
                            : LIGHT.COLORS.TEXT_PRIMARY}
                    >
                        Total
                    </MyLockerText>
                    <MyLockerText
                        fontWeight={GLOBAL.FONT_WEIGHT.REGULAR}
                        fontSize={GLOBAL.FONT_SIZE.LG}
                        color={darkTheme
                            ? DARK.COLORS.TEXT_PRIMARY
                            : LIGHT.COLORS.TEXT_PRIMARY}
                    >
                        R$100,00
                    </MyLockerText>
                </View>
            </View>
            <Button loading={false} darkTheme={darkTheme} onPress={handleLockerRent}>
                Finalizar Compra
            </Button>
        </View>
        </>  
    );
}