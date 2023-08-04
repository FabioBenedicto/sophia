import React, { ReactNode, useState, useRef } from 'react';
import { TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';

import { Eye, EyeSlash } from 'phosphor-react-native';

import { LIGHT } from '../../themes/light';
import { DARK } from '../../themes/dark';

import { styles } from './styles'
import { GLOBAL } from '../../themes/global';

export interface MyLockerTextInputProps extends TextInputProps {
    isEditable?: boolean;
    isPasswordTextInput?: boolean;
    darkTheme: boolean;
}

export interface Input extends TextInputProps {
    isPasswordTextInput?: boolean;
    darkTheme: boolean;
}

export interface ShowPasswordButtonProps {
    showPassword: boolean;
    setShowPassword: (value: boolean) => void;
}

export interface InputNotEditableProps extends TextInputProps {
    darkTheme: boolean;
}

export function ShowPasswordButton({ showPassword, setShowPassword }: ShowPasswordButtonProps) {

    return (
        <TouchableOpacity onPress={() => { setShowPassword(!showPassword); }} style={styles.button}>
            {
                showPassword
                    ? <EyeSlash color={GLOBAL.COLORS.BACKGROUND_STATUS_BAR} size={20} weight='bold' />
                    : <Eye color={GLOBAL.COLORS.BACKGROUND_STATUS_BAR} size={20} weight='bold' />
            }
        </TouchableOpacity>
    )
}

export function Input({ isPasswordTextInput, darkTheme, ...props }: MyLockerTextInputProps) {
    const [showPassword, setShowPassword] = useState(false);
    const [selection, setSelection] = useState<{start: number, end?: number | undefined} | undefined>();
    const textInputRef = useRef<TextInput>(null);
    return (
        <View style={[styles.inputContainer, { backgroundColor: darkTheme ? DARK.COLORS.BACKGROUND_INPUT : LIGHT.COLORS.BACKGROUND_INPUT }]}>

            <TextInput
                //onEndEditing={() => {setSelection({start: 0, end: 0})}}
                //onFocus={() => {if (textInputRef.current) {
               // const length = textInputRef.current._internalFiberInstanceHandleDEV._debugOwner.memoizedProps.value.length;
                //setSelection({start: length, end: length})
                //}}}
                //ref={textInputRef}
                //escolher outra propriedade que sirva melhor
                //selection={selection}
                placeholderTextColor={darkTheme ? DARK.COLORS.TEXT_SECONDARY : LIGHT.COLORS.TEXT_SECONDARY}
                secureTextEntry={isPasswordTextInput ? !showPassword : false}
                cursorColor={darkTheme ? DARK.COLORS.TEXT_PRIMARY : LIGHT.COLORS.TEXT_PRIMARY}
                style={[styles.textInput, { color: darkTheme ? DARK.COLORS.TEXT_PRIMARY : LIGHT.COLORS.TEXT_PRIMARY, backgroundColor: darkTheme ? DARK.COLORS.BACKGROUND_INPUT : LIGHT.COLORS.BACKGROUND_INPUT }]} {...props} />
            {
                isPasswordTextInput
                    ? <ShowPasswordButton showPassword={showPassword} setShowPassword={setShowPassword} />
                    : null
            }
        </View>
    )
}

export function InputNotEditable({ darkTheme, ...props }: InputNotEditableProps) {
    return (
        <View style={[styles.inputNotEditableContainer, {backgroundColor: darkTheme ? DARK.COLORS.BACKGROUND : LIGHT.COLORS.BACKGROUND}]}>
            <TextInput editable={false} selection={{ start: 0, end: 0 }} style={[styles.inputNotEditable, {backgroundColor: darkTheme ? DARK.COLORS.BACKGROUND_INPUT_NOT_EDITABLE : LIGHT.COLORS.BACKGROUND_INPUT_NOT_EDITABLE, color: darkTheme ? DARK.COLORS.TEXT_INPUT_NOT_EDITABLE : LIGHT.COLORS.TEXT_INPUT_NOT_EDITABLE}]} {...props} />
        </View>
    )
}

export function MyLockerTextInput({ isEditable = true, isPasswordTextInput, darkTheme, ...props }: MyLockerTextInputProps) {
    return (
        <>
            {
                isEditable
                    ? <Input isPasswordTextInput={isPasswordTextInput} darkTheme={darkTheme} {...props} />
                    : <InputNotEditable darkTheme={darkTheme} {...props} />

            }
        </>
    )
}