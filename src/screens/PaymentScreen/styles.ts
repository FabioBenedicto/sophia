import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textContainer: {
        marginTop: 60,
    },
    priceContainer: {
        width: '100%',
    },
    priceLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    priceSpacing: {
        marginBottom: 15,
    },
    line: {
        height: 1, 
        borderRadius: 1, 
        borderWidth: 1, 
        borderStyle: 'dotted',
    }
});