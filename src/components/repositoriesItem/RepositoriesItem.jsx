import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native';
import RepositoriesStack from '../repositoriesStack/repositoriesStack';
import StyleText from '../styleText/StyleText';
import theme from '../theme/theme';


const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 25,
        paddingBottom: 6
    },
    language: {
        padding: 6, 
        marginTop: 4,
        marginBottom: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        borderRadius: 6,
        overflow: 'hidden'
    },
    image:{
        width: 44,
        height: 44,
        borderRadius: 10
    }

})

const RepositoriesItemHeader = ({
    ownerAvatarUrl,
    fullname,
    description,
    language,
  }) => (
      <View style={{ flexDirection: "row", paddingBottom: 4 }}>
        <View style={{ paddingRight: 10 }}>
          <Image style={styles.image} source={{ url: ownerAvatarUrl }} />
        </View>
        <View style={{ flex: 1 }}>
          <StyleText fontWeight="bold">{fullname}</StyleText>
          <StyleText color="secondary">{description}</StyleText>
          <StyleText style={styles.language}>{language}</StyleText>
        </View>
      </View>
    );



const RepositoriesItem = (props) => (
    <View style={styles.container} key={props.id}>  
    <RepositoriesItemHeader  {...props} />
    <RepositoriesStack {...props} />
   </View>
  )

export default RepositoriesItem;