import React, { ReactNode, useEffect, useState } from "react";
import {Keyboard, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback,View} from 'react-native';

import { styles } from "./styles";

export interface ContainerProps {
    children: ReactNode
}

export function Container({children} : ContainerProps) {
  const [containerHeight, setContainerHeight] = useState<number | undefined>();
  const [isKeyboardVisible, SetisKeyboardVisible] = useState<boolean | undefined>();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        SetisKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        SetisKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <ScrollView
      onLayout={(event) => {
        if (!isKeyboardVisible) {
          setContainerHeight(event.nativeEvent.layout.height);
        }
      }}
      bounces={false}
    >
      <KeyboardAvoidingView>
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
            <View style={[styles.container, {height: containerHeight}]}>
              {children}
            </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}