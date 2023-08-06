import React, { Ref, forwardRef, useRef } from "react";
import { View, TextInput, TextInputProps } from "react-native";

import { styles } from "./styles";

export interface MyLockerCharInputProps extends TextInputProps {
}

export const MyLockerCharInput = forwardRef<TextInput, MyLockerCharInputProps>(function MyLockerCharInput(props, ref) {
    return (
        <View style={styles.container}>
            <TextInput maxLength={1} style={styles.input} {...props} ref={ref} />
        </View>
    )
});