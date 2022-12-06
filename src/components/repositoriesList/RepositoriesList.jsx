import React, { useContext } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Switch, Text, View } from "react-native";
import useRepository from "../hooks/useRepository.js";
import RepositoriesItem from "../repositoriesItem/RepositoriesItem.jsx";
import { EventRegister } from "react-native-event-listeners";
import { UserContext } from "../google/UserFirebaseProvider.jsx";
import { ThemeContext } from "../themeContext/ThemeContext.jsx";

const styles = StyleSheet.create({
  intro: {
    marginLeft: 330,
  },
});

const RepositoriesList = () => {
  const { mode, setMode, loading } = useContext(UserContext);
  const theme = useContext(ThemeContext);

  const repositories = useRepository();


  return (
    <View style={{ backgroundColor: theme.background }}>
      <View style={{ marginTop: 50 }}>         
        <Text
          style={{
            width: 100,
            marginLeft: 304,
            padding: 6,
            fontSize: 12,
            fontWeight: "bold",
            color: theme.color,
          }}
        >
          Dark Mode
        </Text>
        <Switch
          style={styles.intro}
          value={mode}
          onValueChange={() => {
            setMode((value) => !value);
            EventRegister.emit("changeTheme", mode);
          }}
          trackColor={{ false: "#2F8A82", true: "#8EC5FC" }}
        ></Switch>
        {
          loading ? (<ActivityIndicator size= 'large' color="#04B4AE" style={{ height: '90%' }} />) 
          : ( 
            <FlatList
              data={repositories}
              ItemSeparatorComponent={() => <Text> </Text>}
              contentContainerStyle={{ paddingBottom: 10 }}
              renderItem={({ item }) => {
                // console.log("renderItem", item);
                return <RepositoriesItem {...item} />;
              }}
            />
          )
        }
      </View>
    </View>
  );
};

export default RepositoriesList;
