import { StyleSheet } from 'react-native';
import colors from '../../../config/res'

const white = colors.white
const black = colors.black
export default StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: white,
    },
    welcome: {
        fontSize: 40,
        fontFamily: 'verdana',
        fontWeight:'bold',
        textAlign: 'center',
        color: colors.backgroundColor,
        // margin: 10,
        marginTop: '30%',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        // marginBottom: 5,
    },
    userNameTextInputStyle: {
        width: 250,
        margin: 10,
        // borderBottomColor: global_resources.themeBackgroundColor
    },
    passwordTextInputStyle: {
        width: 250,
        margin: 10,
        // borderBottomColor: global_resources.themeBackgroundColor
    },
    input: {
        height: 40,
        borderColor: colors.backgroundColor,
        borderWidth: 1,
        borderRadius: 5,
        color:colors.backgroundColor,
        width: '80%',
        marginTop: 10,
        // marginBottom: 5
    },
    button: {
        paddingVertical: 10,
        backgroundColor: colors.backgroundColor,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        marginTop: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        paddingHorizontal: 10,
    },
    line: {
        height: 1,
        width: '43%',
        backgroundColor: colors.backgroundColor,
        marginTop: 10,
    },
    cont: {
        width: '80%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textCont: {
        marginTop: 10,
        flexDirection: 'row'
    },
    simpleText: {
        fontSize: 11
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 11,
        color:colors.backgroundColor
    },

    line1: {
        height: 1,
        width: '100%',
        backgroundColor: colors.backgroundColor,
        marginTop: 100,
    },
    footer: {
        flexDirection: 'row',
        marginTop: 10
    },
    line2: {
        height: 1,
        width: '100%',
        backgroundColor: colors.backgroundColor,
        marginTop: 10,
    }
})
