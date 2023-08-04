import { View, Text } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, Value, withTiming } from 'react-native-reanimated';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';

import { styles } from './styles';

export function Modal() {
  const position = useSharedValue(0);

    const rotationGesture = Gesture
        .Pan()
        .minPointers(2)
        .onUpdate((event) => {
            position.value = event.translationY

            if (event.translationY >= 0) {
                console.log('INDO PARA A DIREITA!');
            } else {
                console.log('INDO PARA A ESQUERDA!');
            }
        })


    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: position.value }]
    }));

    return (
        <View style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: 'red', zIndex: 2 }}>
            <GestureDetector gesture={rotationGesture}>
                <Animated.View style={[{
                    width: 150,
                    height: 150,
                    borderRadius: 12,
                    backgroundColor: '#8527e5',
                    zIndex: 1,
                    flexDirection: 'row',
                    alignSelf: 'flex-end'
                }, animatedStyle]}>
                    <Text>Teste</Text>
                </Animated.View>
            </GestureDetector>
        </View>
  )
}