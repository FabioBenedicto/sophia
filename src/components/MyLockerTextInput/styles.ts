import { StyleSheet } from "react-native";
import { LIGHT } from "../../themes/light";
import { GLOBAL } from "../../themes/global";

export const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    borderRadius: 10,
    elevation: 6,
    backgroundColor: 'red',

  },

  textInput: {
    borderRadius: 10,
    paddingVertical: 25,
    justifyContent: 'flex-start',
    color: LIGHT.COLORS.TEXT_SECONDARY,
    flex: 1,
    alignItems: 'center',
    fontSize: 20,
    backgroundColor: 'yellow',
  },

  button: {
    marginLeft: 10,
  },

  inputNotEditable: {
    fontSize: GLOBAL.FONT_SIZE.MD,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
},
  inputNotEditableContainer: {
     elevation: 6, 
     marginBottom: 10, 
     borderRadius: 10, 
  }

});