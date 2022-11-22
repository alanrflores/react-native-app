import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import StyleText from '../styleText/StyleText.jsx';
import Constants from 'expo-constants';
import theme from '../theme/theme.js';
import { Link, useLocation } from 'react-router-native';


const styles = StyleSheet.create({
container: {
    backgroundColor: theme.appBar.primary,
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight + 10,

},
scroll: {
 paddingBottom: 15
},

text: {
    color: theme.appBar.textSecondary,
    paddingHorizontal: 10
},
active: {
    color: theme.appBar.textPrimary
}
});

const AppBarTab = ({ children, to }) => {
    const { pathname } = useLocation();
    //recupero el pathname con uselocation, y si el pathname es igual
    //hacia donde quiero ir va estar activo y si esta activo lo renderizo con styles que pusimos
    const active = pathname === to

    const textStyle = [
        styles.text,
        active && styles.active
    ]
    return (
         <Link to={to}>
            <StyleText fontWeight='bold' style={textStyle}>
                {children}
            </StyleText>          
         </Link>
    )
};

const AppBar = () => {
    
return (
 <View style={styles.container}>
    <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.scroll}>
    <AppBarTab to='/'>Repositories</AppBarTab>
    <AppBarTab to='/signin'>Sign In</AppBarTab>
    </ScrollView>
 </View>
)    
};

export default AppBar;