import React, { ReactNode, useRef, useState } from 'react';
import { Text, TextProps } from 'react-native';

import { GLOBAL } from '../../themes/global';

export interface MyLockerTextProps extends TextProps {
  fontWeight?: string;
  fontSize?: number;
  lineHeight?: number;
  isVertical?: boolean;
  color: string;
  children: ReactNode;
  textAlign?: string;
}

export function MyLockerText({
  fontWeight = GLOBAL.FONT_WEIGHT.REGULAR,
  fontSize = GLOBAL.FONT_SIZE.MD,
  lineHeight,
  color,
  isVertical,
  children,
  textAlign,
  ...props
}: MyLockerTextProps) {
    const textRef = useRef<any>();
    const [offSet, setOffSet] = useState<number>(0);
  return (
    <Text style={{ textAlign: textAlign,fontFamily: fontWeight, fontSize: fontSize, color: color, lineHeight: lineHeight, 
      transform:  isVertical ? [
        { rotate: "180deg" }, 
        { translateX: -offSet }, 
        { translateY: offSet }
      ] : undefined}} {...props}
      ref={textRef}
      onLayout={() => {
        textRef.current?.measure((x, y, width, height) => {
          console.log(width / 2 - height / 2);
          setOffSet(width / 2 - height / 2);
        });
      }}
      >
      {children}
    </Text>
  )
}