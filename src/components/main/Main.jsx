import React, { useContext, useEffect, useState } from "react";
import { Text, View, Button, Alert, StyleSheet } from "react-native";
import RepositoriesList from "../repositoriesList/RepositoriesList.jsx";
// import AppBar from "../appBar/AppBar.jsx";
import Login from "../pages/login/Login.jsx";
import CreateUser from "../pages/createUser/CreateUser.jsx";
// import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { UserContext } from "../google/UserFirebaseProvider.jsx";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { EventRegister } from "react-native-event-listeners";
import { ThemeContext } from "../themeContext/ThemeContext.jsx";
import theme from "../theme/theme.js";
import CustomDrawer from "../customDrawer/CustomDrawer.jsx";
import Ionicons from "react-native-vector-icons/Ionicons";
import Landing from "../pages/landing/Landing.jsx";

// const Stack = createStackNavigator();
const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#9fbbbc",
  },
  text: {
    fontWeight: "bold",
    marginLeft: 125,
    padding: 20,
  },
});
const Drawer = createDrawerNavigator();

const Main = ({ navigation }) => {
  const { users, logout, mode, setMode } = useContext(UserContext);
  const back = useContext(ThemeContext);

  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      "changeTheme",
      (data) => {
        setMode(!data);
        console.log(data);
      }
    );
    return () => {
      EventRegister.removeEventListener(eventListener);
    };
  }, []);

  const handleLogout = async (navigation) => {
    try {
      await logout();
      Alert.alert("Good bye, we are waiting for you soon");
      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  };

  const LogoutUser = ({navigation}) => {
    const theme = useContext(ThemeContext);
    return (
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={[styles.text, { color: theme.color }]}>Are you sure?</Text>
        <Button onPress={() => handleLogout()} title="Yes!" />
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <ThemeContext.Provider value={mode === true ? theme.dark : theme.light}>
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="Landing"
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
              headerShown: false,
              drawerActiveBackgroundColor: "#04B4AE",
              drawerActiveTintColor: "#ffff",
              drawerLabelStyle: {
                marginLeft: -25,
              },
            }}
          >
            {users ? (
              <>
                <Drawer.Screen
                  name="Home"
                  component={RepositoriesList}
                  options={{
                    drawerIcon: ({ color }) => (
                      <Ionicons name="home-outline" size={22} color={color} />
                    ),
                  }}
                />
                <Drawer.Screen
                  name="Logout"
                  component={LogoutUser}
                  navigation={navigation}
                  options={{
                    drawerIcon: ({ color }) => (
                      <Ionicons
                        name="log-out-outline"
                        size={22}
                        color={color}
                      />
                    ),
                  }}
                />
              </>
            ) : (
              <>
              <Drawer.Screen 
                 name="Landing"
                 component={Landing}
                 navigation={navigation}
                />
                <Drawer.Screen
                  color="#ffff"
                  name="Login"
                  component={Login}
                  navigation={navigation}
                  options={{
                    drawerIcon: ({ color }) => (
                      <Ionicons name="log-in-outline" size={22} color={color} />
                    ),
                  }}
                />
                <Drawer.Screen
                  name="Register"
                  component={CreateUser}
                  navigation={navigation}
                  options={{
                    drawerIcon: ({ color }) => (
                      <Ionicons name="log-in" size={22} color={color} />
                    ),
                  }}
                />
              </>
            )}
          </Drawer.Navigator>
        </NavigationContainer>
      </ThemeContext.Provider>
    </View>
  );
};

export default Main;
