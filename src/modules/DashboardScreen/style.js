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
    logo: {
        width: 100,
        height: 100,
        borderRadius: 15,
        marginBottom: 10
    },
    headerNotificationView: {
        borderRadius: 15,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerNotificationText: {
        margin: 7,
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.backgroundColor
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
    taskDataMain: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 5,
        height: 90,
        width: '90%',
        alignSelf: 'center',
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.listFirst
    },
    taskIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginRight: 5
    }
})
