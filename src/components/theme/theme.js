import { Platform } from "react-native";
const theme = {
    appBar: {
        primary: '#24292e',
        textSecondary: '#999',
        textPrimary: '#fff'
    },
    colors: {
        textPrimary: '#24292e',
        textSecondary: '#586069',
        primary: '#0366d6',
        white: '#fff'
    },
    fontSizes: {
        body: 14,
        subHeading: 16,
    },
    fonts: {
        main: Platform.select({
            android: 'Roboto',
            ios: 'Arial',
            default: 'System'
        })
    },
    fontWeights: {
        normal: '400',
        bold: '700'
    },
    light: {
       theme: "light",
       color: "black",
       background: "white",
    },
    dark: {
        theme: "dark",
        color: "white",
        background: "black",
        borderWidth:1,
        borderStyle: 'dashed',
        borderColor:'white',
        borderTopColor:'white'
    }
} 

export default theme;