import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();
const useFirebase = () => {

    const auth = getAuth();

    const [user, setUsers] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [errors, setErrors] = useState("")



    //create user with email and password

    // const createUser = signInWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {

    //         const user = userCredential.user;

    //     })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //     });



    //Google sign in
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true);

        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false));

    };


    //user state change

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUsers(user)
            } else {
                setUsers({})
            }
            setIsLoading(false);
        });
        return () => unSubscribe;
    }, [])



    //Sign out

    const logOut = () => {
        setIsLoading(true);

        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false))

    };


    //return 
    return {
        user,
        signInUsingGoogle,
        isLoading,
        // createUser,
        logOut
    }
};

export default useFirebase;