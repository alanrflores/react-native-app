import React from "react";
import { View } from "react-native";
import StyleText from "../styleText/StyleText";

const parseThousands = value => {
    return value >= 1000 
    ? `${Math.round(value / 100) / 10}k` 
    : String(value)
}

const RepositoriesStack = (props) => {
    return (
        <View style={{ flexDirection:'row', justifyContent: 'space-around' , paddingTop: 10 }}>
        <View>
         <StyleText align='center' fontWeight='bold'>{parseThousands(props.forksCount)}</StyleText>
         <StyleText align='center'>Forks</StyleText>
        </View>
        <View>
         <StyleText align='center' fontWeight='bold'>{parseThousands(props.stargazersCoutn)}</StyleText>
         <StyleText align='center'>Star</StyleText>  
         </View>
         <View>
         <StyleText align='center' fontWeight='bold'>{props.ratingAverage}</StyleText>
         <StyleText align='center'>Rating</StyleText>
         </View>
         <View>
         <StyleText align='center' fontWeight='bold'>{props.reviewCount}</StyleText>
         <StyleText align='center'>Reviews</StyleText>
         </View>
        </View>
    )
};

export default RepositoriesStack;