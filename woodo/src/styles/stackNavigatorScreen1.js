import { StyleSheet } from 'react-native';

const screenOneStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        alignSelf: 'stretch',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        height: 40,
        justifyContent: 'center',
        backgroundColor: '#009b86'
    },
    buttonText: {
        color: 'white',
        fontSize: 22,
        alignSelf: 'center'
    }
});

export default screenOneStyle;