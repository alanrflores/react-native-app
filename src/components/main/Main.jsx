import React from "react";
import { Text, View } from "react-native";
import RepositoriesList from "../repositoriesList/RepositoriesList.jsx";
import AppBar from "../appBar/AppBar.jsx";
import { Route, Routes } from 'react-router-native';
import Login from "../pages/login/Login.jsx";

const Main = () => {
 return (
    <View style={{ flex: 1 }}>
       <AppBar /> 
       <View>
       <Routes>
        <Route path='/' exact element={ <RepositoriesList />}/>
        <Route path='/signin' element={<Login />}/>
        </Routes>
        </View>
    </View>
 )   
};

export default Main;
