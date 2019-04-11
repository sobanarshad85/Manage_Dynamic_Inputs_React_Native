import { StyleSheet } from 'react-native';
import color from '../../../config/res'

const white = color.white
const black = color.black
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: white,
    },
    input1: {
        height: 60,
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 5,
        color: 'red',
        width: '80%',
        marginTop: 10,
        // marginBottom: 5
    },
})
