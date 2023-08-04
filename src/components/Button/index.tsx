import React, { ReactNode } from 'react';
import { ActivityIndicator, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import { MyLockerText } from "../MyLockerText";

import { DARK } from '../../themes/dark';
import { LIGHT } from '../../themes/light';
import { GLOBAL } from '../../themes/global';

import { styles } from "./styles";

export interface ButtonProps extends TouchableOpacityProps {
  loading: boolean;
  children: ReactNode;
  darkTheme: boolean;
}

export function Button({ loading, children, darkTheme, ...props }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: darkTheme
            ? loading
              ? DARK.COLORS.BACKGROUND_BUTTON_LOADING
              : DARK.COLORS.BACKGROUND_BUTTON
            : loading
              ? LIGHT.COLORS.BACKGROUND_BUTTON_LOADING
              : LIGHT.COLORS.BACKGROUND_BUTTON
        }
      ]}
      activeOpacity={1}
      {...props}
    >

      <View style={styles.content}>
        {
          loading
            ? <ActivityIndicator
              size="large"
              color={darkTheme
                ? DARK.COLORS.TEXT_PRIMARY
                : LIGHT.COLORS.TEXT_PRIMARY}
            />
            : <MyLockerText
              fontWeight={GLOBAL.FONT_WEIGHT.BOLD}
              fontSize={GLOBAL.FONT_SIZE.SEMI_LG}
              lineHeight={GLOBAL.FONT_SIZE.LG}
              color={darkTheme
                ? DARK.COLORS.TEXT_BUTTON
                : LIGHT.COLORS.TEXT_BUTTON}
            >
              {children}
            </MyLockerText>
        }
      </View>

    </TouchableOpacity >
  )
}