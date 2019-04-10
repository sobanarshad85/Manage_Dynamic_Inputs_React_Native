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
        alignItems: 'flex-start'
    },
    headerText: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 5
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
    transportDetailsMain: {
        marginTop: 30,
        width: '90%',
        justifyContent: 'center',
        height: 50,
        backgroundColor: colors.backgroundColor,
        alignSelf: 'center'
    },
    transportDetailsMainText: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: colors.white
    },
    transportDetailsBodyText: {
        padding: 5,
        color: colors.backgroundColor
    },
    description: {
        marginTop: 30,
        width: '90%',
        justifyContent: 'center',
        height: 50,
        backgroundColor: colors.backgroundColor,
        alignSelf: 'center',
    },
    buttonMain: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        marginBottom: 30
    },
    buttonTouchable: {
        height: 40,
        width: 180,
        backgroundColor: colors.backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    buttonText: {
        color: colors.white,
        paddingVertical: 10,
        paddingHorizontal: 10,
        fontWeight: 'bold',
        fontSize: 16
    }
})
