import React, { useContext } from "react";
import { Text, View } from "react-native";
import StyleText from "../styleText/StyleText";
import { ThemeContext } from "../themeContext/ThemeContext";

const parseThousands = value => {
    return value >= 1000 
    ? `${Math.round(value / 100) / 10}k` 
    : String(value)
}

const RepositoriesStack = (props) => {
    const theme = useContext(ThemeContext);
    return (
        <View style={{ flexDirection:'row', justifyContent: 'space-around' , paddingTop: 10 }}>
        <View>
         <Text style={{ alignItems: 'center', fontWeight: 'bold', color: theme.color}}>{parseThousands(props.forksCount)}</Text>
         <Text style={{color: theme.color}} align='center'>Forks</Text>
        </View>
        <View>
         <Text style={{ alignItems: 'center', fontWeight: 'bold', color: theme.color}}>{parseThousands(props.stargazersCount)}</Text>
         <Text style={{color: theme.color}} align='center'>Star</Text>  
         </View>
         <View>
         <Text style={{ alignItems: 'center', fontWeight: 'bold', color: theme.color}}>{props.ratingAverage}</Text>
         <Text style={{color: theme.color}} align='center'>Rating</Text>
         </View>
         <View>
         <Text style={{ alignItems: 'center', fontWeight: 'bold', color: theme.color}}>{props.reviewCount}</Text>
         <Text style={{color: theme.color}} align='center'>Reviews</Text>
         </View>
        </View>
    )
};

export default RepositoriesStack;