import { StyleSheet } from 'react-native';

const screenTwoStyle = StyleSheet.create({
    titleText: {
        fontSize: 22
    },
    buttonContainer: {
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20
    },
    buttonText: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 18
    },
    button: {
        alignSelf: 'stretch',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        padding: 10,
        height: 40,
        justifyContent: 'center',
        backgroundColor: '#009b86'
    },
});

export default screenTwoStyle;