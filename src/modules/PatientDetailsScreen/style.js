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
        height: 40,
        borderColor: colors.backgroundColor,
        borderWidth: 1,
        borderRadius: 5,
        color: colors.backgroundColor,
        width: '100%',
        marginTop: 10,
        // marginBottom: 5
    },
    vehicleShortDetailsSection: {
        marginTop: 30,
        marginBottom: 30,
        width: '90%',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: colors.borderColor
    },
    headerMainStyle: {
        height: 50,
        width: '100%',
        backgroundColor: colors.backgroundColor
    },
    headerTextView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold'
    },
    input: {
        height: 40,
        borderColor: colors.backgroundColor,
        borderWidth: 1,
        borderRadius: 5,
        color:colors.backgroundColor,
        width: '100%',
        marginTop: 3,
        // marginBottom: 5
    },
})
