import {StyleSheet} from 'react-native';
import colors from './colors';

var styles = StyleSheet.create({

    container: {
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
        flex: 1,
        backgroundColor: colors.backgroundColor,
        justifyContent: 'space-evenly'
    },
    header: {
        fontSize: 40,
        alignSelf: 'center',
        padding: 20,
        marginBottom: 20,
        color: colors.primaryColor,
        fontWeight: 'bold'
    },
    list: {
        margin: 10,
        alignSelf: 'center',
    },
    text: {
        textAlign: 'center',
        margin: 20,
        lineHeight: 25
    },
    textInput: {
        borderWidth: 1,
        fontSize: 16,
        padding: 10,
        marginRight: 30,
        marginLeft: 30
    }
});

export default styles;