import React, { useContext, useState } from "react";
import { Text, TextInput, View, Button, StyleSheet, Alert } from "react-native";
import { Formik, useField, setValue } from "formik";
import StyledTextInput from "./StyledTextInput";
import StyledText from "../../styleText/StyleText.jsx";
import { loginValidation } from "../../validationSchemas/loginValidation";
import { UserContext } from "../../google/UserFirebaseProvider";
import { Link } from "react-router-native";
import { auth } from "../../database/firebase";
import { TouchableOpacity } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 15,
    marginLeft: 20,
  },
  forms: {
    margin: 8,
    padding: 20,
    borderRadius: 8,
    backgroundColor: "#ffff",
  },
});

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Email is required";
  } else if (
    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      values.email
    )
  ) {
    errors.email = "Invalid email address";
  }
  console.log(errors);
  return errors;
};

const FormikInputValues = ({ name, ...props }) => {
  //field --> cual es el valor del campo que pasamos
  //meta ---> informacion del campo , validaciones, errores
  //helpers --> como actualizamos los campos? setvalues.
  const [field, meta, helpers] = useField(name);
  return (
    <>
      <StyledTextInput
        value={field.value}
        error={meta.error}
        //lo que estamos cambiando es el campo de email, importante decirle el campo
        //espera el campo que se va a cambiar no el valor
        onChangeText={(value) => helpers.setValue(value)}
        //pasamos resto de props para que si tiene un placeholders lo pueda utilizar
        {...props}
      />
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  );
};

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { loginUser } = useContext(UserContext);

  const onPressLogin = async (navigation) => {
    if (email === "" && password === "") {
      return Alert.alert("Fill in the fields, please!");
    } else if (email <= 4) {
      return Alert.alert("Email must be greater than 5");
    } else if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      return Alert.alert("Email is invalid");
    } else if (password <= 4) {
      return Alert.alert("Password must be greater than 5");
    }
    setError("");
    try {
      await loginUser(email, password);
      console.log(email, password);
      navigation.navigate("Home");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "#04B4AE" }}>
      <View style={{ marginTop: 90 }} validate={validate}>
        <TextInput
          style={styles.forms}
          placeholder="E-mail"
          onChangeText={(text) => setEmail(text)}
          value={email}
          required
        />
        {error && <Text style={styles.error}>{error}</Text>}
        <TextInput
          style={styles.forms}
          secureTextEntry
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          required
        />

        <Button color="#ffff" onPress={onPressLogin} title="Login" />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            padding: 12,
            marginLeft: 46,
          }}
        >
          <Text style={{ marginTop: 12, fontWeight: "bold" }}>
            You do not have an account?
          </Text>
          <Button
            color="#ffff"
            onPress={() => navigation.navigate("Register")}
            title="Sign up"
          />
        </View>
      </View>
    </View>
  );
};

export default Login;
