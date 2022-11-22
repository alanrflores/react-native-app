import React from "react";
import Main from "./src/components/main/Main";
import { NativeRouter } from "react-router-native";
import { StatusBar } from "expo-status-bar";

const App = () => {
  // console.log("hola")
  return (
    <>
      <StatusBar style='light'/>
      <NativeRouter>
        <Main />
      </NativeRouter>
    </>
  );
};

export default App;
