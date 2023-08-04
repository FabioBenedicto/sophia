import React from "react";
import { View, TextInput, TextInputProps } from "react-native";

import { styles } from "./styles";

export interface MyLockerCharInputProps extends TextInputProps {
}

export function MyLockerCharInput({ ...props }: MyLockerCharInputProps) {
    return (
        <View style={styles.container}>
            <TextInput maxLength={1} style={styles.input} {...props} />
        </View>
    )
}