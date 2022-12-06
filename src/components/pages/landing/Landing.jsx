import React from 'react';
import { View, Text, Button, FlatList, Animated, Dimensions, Image, SafeAreaView, StyleSheet } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import {img} from '../../data/data.js'


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: "center",
    },
    posterImage: {
      width: "100%",
      //siempre que se vea mas rectangular
      height: ANCHO_CONTENEDOR * 1.2,
      resizeMode: "cover",
      borderRadius: 24,
      margin: 0,
      marginBottom: 10,
    },
  });



//app que sea 100% responsiva
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

//que porcentaje de la pantalla queremos que ocupe cada elemento del carrousel
//lo que sea de ancho x el nro de abajo
const ANCHO_CONTENEDOR = width * 0.7;
const ESPACIO_CONTENEDOR = (width - ANCHO_CONTENEDOR) / 2;
const ESPACIO = 10;
const ALTURA_BACKDROP = height * 0.5;

const Backdrop = ({ scrollX }) => {
    return (
        <View style={[
            {
                position: "absolute",
                height: ALTURA_BACKDROP,
                top: 0,
                width: width,
            },
            StyleSheet.absoluteFillObject,
        ]}
        >
            {
                img.map((imagen, index) => {
                    const inputRange = [
                        (index - 1) * ANCHO_CONTENEDOR,
                        index * ANCHO_CONTENEDOR,
                        (index + 1) * ANCHO_CONTENEDOR,
                      ];
                      const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [0, 1, 0],
                      });
                      return (
                          <Animated.Image
                          key={index}
                          source={{ uri: imagen}}
                          blurRadius={4}
                          style={[
                            { width: width, height: ALTURA_BACKDROP, opacity},
                            StyleSheet.absoluteFillObject,
                          ]} 
                          />
                      );
                })}
                  <LinearGradient
                         colors={["transparent", "white"]}
                         style={{
                          width,
                          height: ALTURA_BACKDROP,
                          position: "absolute",
                          bottom: 0,
                         }}
                         />     
        </View>
    )
}

const Landing = ({navigation}) => {
    //guardamos el deslizamiento en la constante scrollx y que va a permanecer gracias a  userRef
    const scrollX = React.useRef(new Animated.Value(0)).current;
    return(
      //esto garantiza que la app no choque con la parte de arriba de los telefonos
    <SafeAreaView style={styles.container}>
    <Backdrop scrollX={scrollX} />
    <Animated.FlatList  
     data={img}
     onScroll={Animated.event([{ nativeEvent: { contentOffset: { x : scrollX } }}], { useNativeDriver: true})} 
     decelerationRate={0}
     horizontal={true}
     showsHorizontalScrollIndicator={false}
     contentContainerStyle={{ paddingTop: 180, paddingHorizontal: ESPACIO_CONTENEDOR }}
     keyExtractor={(item) => item}
     renderItem={({ item, index }) => {
        //CON ESTO TENEMOS EN CUENTA DE ACUERDO  CUAL FUE EL ELEMENTO ANTERIOR,
        //CUAL ES EL ELEMENTO EN CURSO, Y CUAL ES EL QUE SIGUE
        const inputRange = [
             (index - 1) * ANCHO_CONTENEDOR,
              index * ANCHO_CONTENEDOR,
             (index + 1) * ANCHO_CONTENEDOR,
        ];
        //que se desplace la del medio
       const outputRange = [0, -50, 0];
       //INTERCALA LOS SIG VALORES
       const scrollY = scrollX.interpolate({
        inputRange,
        outputRange,
       })
        return (
          <View style={{ width: ANCHO_CONTENEDOR, marginLeft: 8 }}>
               <Animated.View 
               style={{
                marginHorizontal: ESPACIO,
                padding: ESPACIO,
                borderRadius: 34,
                backgroundColor: "#ffff",
                alignItems: "center",
                transform: [{ translateY: scrollY }],
            }}>
                <Image source={{uri: item}} 
                 style={{ 
                 width: '100%', 
                 height: ANCHO_CONTENEDOR * 1.2,  
                 borderRadius: 24, 
                 resizeMode: 'cover', 
                 margin: 0,
                 marginBottom: 10
                 }}/>

                </Animated.View>
          </View>
        )
     }} />
     <View>
        <Text style={{ marginLeft: 142, fontWeight: 'bold', fontSize: 20 , paddingBottom: 20}}>¡Welcome!</Text>
        <Button fontWeight= 'bold' onPress={()=> navigation.navigate('Login')} title='Go to login' />
     </View>
     </SafeAreaView>
    )
}

export default Landing;