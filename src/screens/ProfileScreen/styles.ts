import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'black',
    },

    headerContainer: {
        height: '20%',
    },

    headerIcon:{
        alignSelf: 'flex-end',
        marginTop: 15,
        marginRight: 15,
    },

    containerWithoutHeader: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: -20,
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    userContainer: {
        width: '100%',
    },

    userDataContainer: {
        flexDirection: 'row', 
        marginBottom: 40,
    },

    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },

    userDataTextContainer: {
        flex: 1,
        alignSelf: 'flex-end',
        marginLeft: 15,
    },

    userLockerContainer: {
    },

    imageContainer: {
        alignItems: 'center',
    },
    
    teste: {
        backgroundColor: 'blue',
        position: 'relative',
        justifyContent: "space-between",
        top: -20,
        flexGrow: 1,
        alignItems: 'center'
        //paddingHorizontal: '6%'

    },

    userDataText:{
        alignSelf: 'flex-end',
        maxWidth: '100%',
        marginLeft: 15,
        flexWrap: 'wrap',
        flex: 1,
        //tipo ta certinho, bagulho é que precisa descer ele quando acontece a quebra de linha e acho que eu sei um jeito
    },

    line: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },

    userLockerContainerImage: {
        marginBottom: 6,
    }
});