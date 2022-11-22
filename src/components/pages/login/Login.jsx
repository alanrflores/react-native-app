import React from "react";
import { Text, TextInput, View, Button, StyleSheet } from "react-native";
import { Formik, useField, setValue } from 'formik';
import StyledTextInput from "./StyledTextInput";
import StyledText from '../../styleText/StyleText.jsx'

const initialValues = {
    email: '',
    password: '',
}


const styles = StyleSheet.create({
    error: {
       color: 'red',
       fontSize: 12,
       marginBottom: 15,
       marginTop: -5
    },
    forms: {
        margin: 14,
    }
});

const validate = (values) => {
    const errors = {}

    if(!values.email){
        errors.email = 'Email is required'
    }else if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)){
        errors.email = 'Invalid email address'
    }
    console.log(errors);
    return errors;
}

const FormikInputValues = ({ name, ...props }) => {
    //field --> cual es el valor del campo que pasamos
    //meta ---> informacion del campo , validaciones, errores
    //helpers --> como actualizamos los campos? setvalues.
   const [field, meta, helpers ] = useField(name)
    return (
    <>
        <StyledTextInput 
        value={field.value}
        //lo que estamos cambiando es el campo de email, importante decirle el campo
        //espera el campo que se va a cambiar no el valor
        onChangeText={value => helpers.setValue(value)}
        //pasamos resto de props para que si tiene un placeholders lo pueda utilizar
        {...props} />
        {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>    
    )
}

const Login = () => {
  return( 
       <Formik validate={validate} initialValues={initialValues} onSubmit={values => console.log(values)}>
          {({ handleSubmit })=> {
            return (
                <View style={styles.forms}>
                    <FormikInputValues 
                      name='email'
                      placeholder="E-mail"
                    />
                    <FormikInputValues
                      name='password'
                      placeholder="Password"
                      secureTextEntry
                     />
                      <Button onPress={handleSubmit} title='Log In'/>
                </View>
            )
          }}
       </Formik>
  )
};

export default Login;
