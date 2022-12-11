import { Text, TouchableOpacity } from 'react-native';

export default function List(props) {

    var style = {
        container: {
            width: props.width,
            height: props.height,
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 20,
            paddingRight: 20,
            backgroundColor: 'white',
            borderWidth: 1,
            borderRadius: 10
        },
        text: {
            color: 'black',
            fontSize: props.fontSize
        }
    }

    return (
        <TouchableOpacity style={style.container} onPress={props.onPress}>
            <Text style={style.text}>{props.title}</Text>
        </TouchableOpacity>
    );
}