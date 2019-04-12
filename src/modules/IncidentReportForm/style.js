import { StyleSheet } from 'react-native';
import colors from '../../../config/res'

const white = colors.white
const black = colors.black
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: white,
    },
    input1: {
        height: 300,
        flexDirection:'row',
        alignSelf:'center',
        borderColor: colors.backgroundColor,
        borderWidth: 1,
        borderRadius: 5,
        color:colors.backgroundColor,
        width: '90%',
        marginTop: 3,
        // marginBottom: 5
    },
})
