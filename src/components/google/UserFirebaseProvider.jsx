import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { createContext } from 'react';
import { auth } from '../database/firebase.js';

export const UserContext = createContext()

const UserFirebaseProvider = ({ children }) => {
 const [users, setUsers] = useState(null);
 const [loading, setLoading] = useState(true);
 const [mode, setMode] = useState(false);
 
 //Registrar usuario
  const registerUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
 //Logear usuario
  const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password);
 
  const logout = () => signOut(auth);

  //reiniciar contraseña
  const resetPassword = async (email) => sendPasswordResetEmail(auth, email);

   //ejecuta cuando carga el componente provider, muestra la info de user si esta registrado o logeado
   useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
      setUsers(currentUser);
      setLoading(false);
    });
    return () => unsuscribe();
  }, []);

  return (
    <UserContext.Provider 
    value={{
        registerUser,
        loginUser,
        logout,
        users,
        setUsers,
        loading,
        setLoading,
        resetPassword,
        mode,
        setMode
    }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserFirebaseProvider

