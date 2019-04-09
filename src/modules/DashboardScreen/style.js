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
   logo: {
        width: 100,
        height: 100,
        borderRadius: 15,
        marginBottom: 10
    },
})
