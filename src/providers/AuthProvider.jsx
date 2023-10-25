import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
} from "firebase/auth";
import  app  from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };


  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
    useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log("ok", currentUser);
        setUser(currentUser);
        setLoading(false);
    });
    return () => {
        unSubscribe();
    };
    }, []);
  

  const authInfo = {user, signIn, createUser, logOut, loading };
  
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
