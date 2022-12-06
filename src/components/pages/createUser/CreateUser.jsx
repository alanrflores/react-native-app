import React, { useContext, useState } from "react";
// import { Formik, useField, setValue } from "formik";
// import { loginValidation } from "../../validationSchemas/loginValidation";
import { Button, StyleSheet, View, Alert, TextInput, Text } from "react-native";
import StyledTextInput from "../login/StyledTextInput";
import StyleText from "../../styleText/StyleText";
import { UserContext } from "../../google/UserFirebaseProvider";
import db, { auth } from "../../database/firebase";



const initialValues = {
  email: "",
  password: "",
};

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 15,
    marginLeft: 20,
  },
  form: {
    margin: 8,
    padding: 20,
    borderRadius: 8,
    backgroundColor: "#ffff",
  },
});

const CreateUser = ({ navigation }) => {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [confirmPassword, setConfirmPassword] = useState(""); 
 const [error, setError] = useState("");

 const { registerUser } = useContext(UserContext);

  const onRegisterPress = async(navigation) => {
    if (password !== confirmPassword) {
       Alert.alert("Passwords don't match.") 
       return  
    }
    if(email === '' || password === '' || confirmPassword === ''){
      Alert.alert('Fill in the fields, please!')
    }
      try {
        await registerUser(email, password)
        navigation.navigate("Home")
        console.log('User created!')
      } catch (error) {
        setError(error.message)
      }
    }
      
  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: "#04B4AE" }}>
      <View style ={{ marginTop: 90}}>
                <TextInput
                    style={styles.form}
                    placeholder='E-mail'
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    
                />
                {error && <Text style={styles.error}>{error}</Text>}
                <TextInput
                    style={styles.form}
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    
                />
                <TextInput
                    style={styles.form}
                    secureTextEntry
                    placeholder='Confirm Password'
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                />

                <Button color="#ffff" onPress={()=> onRegisterPress()} title="Created"/>
      </View>
   </View>
  );
};

export default CreateUser;
