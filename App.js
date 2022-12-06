import 'react-native-gesture-handler';
import React from "react";
import Main from "./src/components/main/Main";
import { NativeRouter } from "react-router-native";
import { StatusBar } from "expo-status-bar";
import UserFirebaseProvider from "./src/components/google/UserFirebaseProvider";
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { StyleSheet, Switch, useColorScheme } from 'react-native';


// import { ApolloProvider } from '@apollo/client';
// import createApolloClient from "./src/components/utils/apolloClient.js";

// const apolloClients = createApolloClient;
 
const darkTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#1A1A1A",
    accent: "#FAFAFA"
  },
};

const lightTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#FAFAFA",
    accent: "#1A1A1A",
  },
  
};


const App = () => {
   const scheme = useColorScheme();
   
  return (
    <>
    
      <UserFirebaseProvider>
       <PaperProvider theme={scheme === 'dark' ? darkTheme : lightTheme}>
        <NativeRouter>
         <Main />
        </NativeRouter>
        </PaperProvider>
      </UserFirebaseProvider>
    </>
  );
};

export default App;
