import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#999',
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginBottom: 12
  },
  error: {
    borderColor: 'red'
  }
})


const StyledTextInput = ({ style={}, error, ...props}) => {
     const inputStyles = [
        styles.textInput,
        styles,
        error && styles.error
     ]
     return <TextInput style={inputStyles} {...props} />

}


export default StyledTextInput;