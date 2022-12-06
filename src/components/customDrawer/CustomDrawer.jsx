import React, { useContext } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { ThemeContext } from "../themeContext/ThemeContext";
import { UserContext } from "../google/UserFirebaseProvider";

const styles = StyleSheet.create({
    intro: {
        flex: 1,
        paddingTop: 16,
        height: '100%',
        backgroundColor: '#ffff'
    }
})
const CustomDrawer = (props) => {
   
    const theme = useContext(ThemeContext);
    const { users } = useContext(UserContext);

 const imagen = {uri: 'https://t3.ftcdn.net/jpg/03/75/66/64/240_F_375666468_AeM9SXojKpwtBEdckFCT3ULcEyotj8ck.jpg'}
    return (
        <View style={{flex: 1 }}>
         <DrawerContentScrollView contentContainerStyle={{ backgroundColor: '#04B4AE'}}>
            <ImageBackground 
              source={imagen} 
              style={{padding: 20, opacity: 12}}>
                <Image source={require('../../../assets/emoji.jpeg')} style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}} />
                <Text style={{ color: '#ffff', fontWeight: 'bold'}}>{users ? users.email : 'John Doe'}</Text>
            </ImageBackground>
            <View style={styles.intro}>
             <DrawerItemList {...props} />
            </View>
         </DrawerContentScrollView>
       </View>
    )
};

export default CustomDrawer;
