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
    vehicleBody: {
        height: 30,
        width: '100%',
        // backgroundColor:colors.lightBlue
    },
    vehicleText: {
        color: colors.backgroundColor,
        fontSize: 16,
        // fontWeight: 'bold'
    },
    VehicleMoreButtonMain: {
        flexDirection: 'row',
        height: 50,
        width: '100%',
        backgroundColor: colors.backgroundColor,
        justifyContent: 'center'
    },
    vehicleMoreButtonText: {
        color: colors.white,
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 18
    },
    vehicleMoreButtonIcon: {
        justifyContent: 'center',
        marginRight: 10
    },
})
