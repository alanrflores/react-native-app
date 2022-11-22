import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from '../theme/theme.js';


const styles = StyleSheet.create({
 
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal
  },
  bold: {
    fontWeight:theme.fontWeights.bold,
  },
  colorPrimary: {
     color: theme.colors.textPrimary
  },
  colorSecondary: {
    color: theme.colors.textSecondary
  },
  subheading: {
    fontSize: theme.fontSizes.subHeading,
  },
  big: {
    fontSize: 20
  },
  small: {
    fontSize: 10
  },
  textAlignCenter: {
    textAlign: 'center'
  }
  
});

export default function StyleText({ children, align, color,fontSize, fontWeight, style, ...resOfProps }){
const textStyle = [
    styles.text,
    style,
    align === 'center' && styles.textAlignCenter,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    fontSize === 'subheading' && styles.subheading,
    fontWeight === 'bold' && styles.bold,
]

 return (
    //pasamos props que no estamos controlando en children, igualmente se la pasamos a text
    <Text style={textStyle} {...resOfProps}>
        {children}
    </Text>
 )
};