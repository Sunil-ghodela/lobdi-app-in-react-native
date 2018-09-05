import { StyleSheet } from 'react-native';

const InputFieldStyle = StyleSheet.create({
    container: {
        marginTop: 100,
        paddingTop: 23
     },
     input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1,
        paddingLeft: 10 
     },
     submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
     },
     submitButtonText:{
        color: 'white'
     }
});

export default InputFieldStyle; 