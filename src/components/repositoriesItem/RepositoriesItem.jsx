import React, { useContext, useState } from "react";
import { View, StyleSheet, Image, Text, Modal, Alert, Pressable } from "react-native";
import RepositoriesStack from "../repositoriesStack/repositoriesStack";
import StyleText from "../styleText/StyleText";
import theme from "../theme/theme";
import { ThemeContext } from "../themeContext/ThemeContext";
import Ionicons from "react-native-vector-icons/Ionicons";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 25,
    paddingBottom: 6,
  },
  language: {
    padding: 8,
    marginTop: 4,
    marginBottom: 4,
    color: theme.colors.white,
    backgroundColor: "teal",
    alignSelf: "flex-start",
    borderRadius: 6,
    overflow: "hidden",
    fontWeight: "bold",
  },
  image: {
    width: 54,
    height: 54,
    borderRadius: 40,
    padding: 4,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3
  },
  button: {
    borderRadius: 20,
    marginTop: 8,
    padding: 8,
    elevation: 1
  },
  buttonOpen: {
    backgroundColor: "#04B4AE",
  },
  buttonClose: {
    backgroundColor: "#04B4AE",
    width: 40,
    padding: 8,
    
 
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 20,
    textAlign: "center",
    fontSize: 16,
    fontWeight: 'bold'
  }
});

const RepositoriesItemHeader = ({
  ownerAvatarUrl,
  fullName,
  description,
  language,
}) => {
  const theme = useContext(ThemeContext);
  const [modal, setModal] = useState(false);
  
  return (

    <View style={{ flexDirection: "row", paddingBottom: 4 }}>
      <View style={{ paddingRight: 10 }}>
        <Image style={styles.image} source={{ url: ownerAvatarUrl }} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16, color: theme.color }}>
          {fullName}
        </Text>
        <Text style={{marginTop: 6, padding: 4, color: theme.color }}>{description}</Text>
       
        <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={()=> {
          Alert.alert('Modal has been closed.');
          setModal(!modal);
        }} 
        >
        <View style={styles.centeredView}>
        <View style={[styles.modalView, {backgroundColor: theme.background}]}> 
        <Text style={[styles.modalText, {color: theme.color}]}>
          {
          language ? 
          language === 'TypeScript' ? 'TypeScript is used to develop JavaScript applications that will run on the client or server side, or extensions to programs (Node. js and Deno). TypeScript extends the syntax of JavaScript, so any existing JavaScript code should work just fine.'
          : language === 'Ruby' ? 'It is a general-purpose language, that is, all kinds of different applications can be developed with Ruby: web service applications, email clients, backend data processing, network applications, etc.'
          : language === 'Python' ? 'Python is a programming language widely used in web applications, software development, data science, and machine learning (ML). Developers use Python because it'
          : language === 'JavaScript' ? 'JavaScript is a programming language that developers use to make web pages interactive. From updating social media feeds to displaying interactive maps and animations, JavaScript features can enhance a website' 
          : 'Java is a programming language computing platform created by Sun Microsystems in 1995. It has evolved from humble beginnings to power much of today' : null}
        </Text>
        <Pressable
        style={[styles.button, styles.buttonClose]}
        onPress={()=> setModal(!modal)}
        >
          <Text style={styles.textStyle}>
          <Ionicons name="close-outline"></Ionicons>
          </Text>
        </Pressable>
        </View>
        </View>
        </Modal>
        <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={()=> setModal(true)} 
        >
          <Text style={styles.textStyle}>
           {language}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const RepositoriesItem = (props) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={{ borderRadius: 10, margin: 6, padding: 8 }}>
      <View style={styles.container} key={props.id}>
        <RepositoriesItemHeader {...props} />
        <RepositoriesStack {...props} />
      </View>
      <View
          style={{
            borderBottomColor: 'white',
            borderBottomWidth: StyleSheet.hairlineWidth,
            padding: 4,
            marginTop: 44
           }}
          />
    </View>
  );
};

export default RepositoriesItem;
