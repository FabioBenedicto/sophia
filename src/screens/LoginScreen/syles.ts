import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    logo: {
        width: '100%',
        resizeMode: 'stretch',
        marginTop: '20%'
    },
    containerWithoutLogo: {
        width: '100%',
        alignItems: 'center',
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    inputPasswordContainer: {
        marginTop: 10,
    },
    linkContainer: {
        alignSelf: 'flex-start',
        marginTop: 20,
        marginLeft: 10,
    }
})