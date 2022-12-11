import { Text, TouchableOpacity } from 'react-native';
import colors from '../pages/colors';

export default function Button(props) {

    var style = {
        container: {
            width: props.width,
            height: props.height,
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 20,
            paddingRight: 20,
            backgroundColor: colors.primaryColor,
            borderWidth: 1,
            borderRadius: 100,
            marginTop: 20,
            marginBottom: 20,
            borderColor: colors.secondaryColor
        },
        text: {
            color: colors.secondaryColor,
            fontSize: props.fontSize,
            alignSelf: 'center'
        }
    }

    return (
        <TouchableOpacity style={style.container} onPress={props.onPress}>
            <Text style={style.text}>{props.title}</Text>
        </TouchableOpacity>
    );
}