import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    logo: {
        width: '100%',
        resizeMode: 'stretch',
        marginTop: '20%'
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    inputContainerWithTextContainer: {
        width: '100%',
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        paddingVertical: 10,
        
    },
    myLockerCharInput: {
        marginRight: 10,
        //marginVertical: 10,
        
    },
    linkContainer: {
        alignSelf: 'flex-start',
        marginTop: 20,
        marginLeft: 10,
    }
});