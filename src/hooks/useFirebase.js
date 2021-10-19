import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();
const useFirebase = () => {

    const auth = getAuth();

    const [user, setUsers] = useState({});

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const getUserEmail = (event) => {
        setEmail(event.target.value);
    };

    const getUserPassword = (event) => {
        setPassword(event.target.value);
    };


    //create user with email and password

    const handleSubmitForm = event => {
        event.preventDefault();

        if (password.length > 6) {
            setError("password should have 6 character")
            return;
        } if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError("password must contain 2 upper case")
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUsers(result.user);
            })

            .catch((err) => {
                setError(err.message)
            })
    };


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
        getUserEmail,
        getUserPassword,
        handleSubmitForm,
        logOut
    }
};

export default useFirebase;