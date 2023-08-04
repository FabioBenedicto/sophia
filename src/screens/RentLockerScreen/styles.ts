import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: '6%',
        alignItems: 'center',
    },
    textContainer: {
        marginTop: 40,
        marginBottom: 50,
    },
    scroll: {
        backgroundColor: '#F6F6F6', 
        paddingRight: 30,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        marginRight: -20,
    },
    scrollContent: {
        flex: 1,
        flexDirection: 'column',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30, 
        padding: 30,
    },
    lockerRow: {
        flexDirection: 'row',
    },
    textRotated: {
        transform: [{ rotate: '270deg'}],
        flexWrap: 'wrap'
    },
    lockerContainerWithOneRoom: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    lockerContainerWithTwoRoom: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    lockersContainerYellow: {
        marginRight: 25,
        flexDirection: 'row',
    },
    lockersContainerRed: {
        flexDirection: 'row',
    },
    lockersContainerGreen: {
        marginRight: 150,
        marginLeft: 70,
        flexDirection: 'row',
    },
    lockersContainerBlue: {
        flexDirection: 'row',
        marginRight: 70,
    }
});