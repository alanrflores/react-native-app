import React, { useContext, useEffect, useState } from 'react';
import { collection, getDocs  } from 'firebase/firestore';
import db from '../database/firebase.js';
import * as Progress from 'react-native-progress';
import { Text } from 'react-native';
import { UserContext } from '../google/UserFirebaseProvider.jsx';

const useRepository = () => {
    const [repositories, setRepositories] = useState([]);
    const { loading, setLoading } = useContext(UserContext);
  
      // const response = await globalThis.fetch('http://192.168.68.108:5000/api/repositories');
      //       const json = await response.json()
      //       setRepositories(json)
      const getData = () => {
        let data = []
        setLoading(true)
         getDocs(collection(db, "repositories"))
        .then(result => {
          setLoading(false) 
          result.forEach((doc)=> {
            data.push(doc.data())
          })
          setRepositories(data);
        })
        .catch(err => console.log(err))
      }
 
    useEffect(()=> {
      if(loading){
        return loading
      }else{
        getData();
      }
    },[]);
    // const { data = {}, loading, refetch } = useQuery(GET_REPOSITORIES);
    // const { repositories = null } = data;
   
     return repositories ? repositories : loading
  };

export default useRepository;