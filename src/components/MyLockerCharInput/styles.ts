import { StyleSheet } from "react-native";
import { GLOBAL } from "../../themes/global";

export const styles = StyleSheet.create({
    container: {
        elevation: 6,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    input: {
        
        paddingVertical: 25,
        paddingHorizontal: 20,
        fontSize: GLOBAL.FONT_SIZE.LG,
    }
});