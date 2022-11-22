import React from 'react';
import {FlatList, Text} from 'react-native';
import repositories from '../data/repositories.js';
import RepositoriesItem from '../repositoriesItem/RepositoriesItem.jsx';


const RepositoriesList = () => {
    
  return (
        <FlatList 
         data = {repositories}
         ItemSeparatorComponent = {()=> <Text> </Text>}
         renderItem= {({ item: repo }) => (
        <RepositoriesItem {...repo} />
         )}
        
        />

  )
}

export default RepositoriesList;