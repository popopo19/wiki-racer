import { View } from 'react-native';

export default function Line(props) {
    return (
        <View
          style={{
            borderBottomColor: props.color,
            borderBottomWidth: props.thickness,
        }}/>
    );
}