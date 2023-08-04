import { StatusBar, setStatusBarHidden } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LoginScreen } from './src/screens/LoginScreen';
import { HomeScreen, ProfileScreen } from './src/screens/ProfileScreen';
import { getStatusBarHeight } from 'react-native-status-bar-height';
//import { useFonts } from 'expo-font';
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { CreatePasswordScreen } from './src/screens/CreatePasswordScreen';
import { VerifyEmailScreen } from './src/screens/VerifyEmailScreen';
import { RentLockerScreen } from './src/screens/RentLockerScreen';
import { PaymentScreen } from './src/screens/PaymentScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {

    const [fontsLoaded] = useFonts({
      Roboto_400Regular,
      Roboto_500Medium,
      Roboto_700Bold,
    });
  
    if (!fontsLoaded) {
      return null;
    }
  

  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar style='light'/>
      <View style={styles.statusBarBackground}/>
      <PaymentScreen />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBarBackground: {
    height: getStatusBarHeight(),
    backgroundColor: '#002147',
  },
});
