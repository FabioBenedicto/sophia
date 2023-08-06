import { View, Text } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, Value, withTiming } from 'react-native-reanimated';
import { GestureDetector, Gesture, TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { styles } from './styles';
import { Button } from '../Button';

export function Modal({setIsVisible}) {
  const position = useSharedValue(140);

    const rotationGesture = Gesture
        .Pan()
        .minPointers(1)
        .onUpdate((event) => {
            position.value = -event.translationY

            if (event.translationY >= 0) {
                console.log('INDO PARA A DIREITA!');
            } else {
                console.log('INDO PARA A ESQUERDA!');
            }
        })


    const animatedStyle = useAnimatedStyle(() => ({
        height: position.value
    }));

    return (
            <View style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%', zIndex: 2, backgroundColor: 'red', justifyContent: 'flex-end' }}> 
                <Button darkTheme={false} loading={false} onPress={()=>{setIsVisible(false)}}>
                    Aqui
                </Button>
            <GestureDetector gesture={rotationGesture}>
                <Animated.View style={[{
                    width: '100%',
                    height: 140,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    backgroundColor: '#8527e5',
                    zIndex: 1,
                }, animatedStyle]}>
                    <Text>Teste</Text>
                </Animated.View>
            </GestureDetector>
            </View>
  )
}