import {
  createUserWithEmailAndPassword,
  getAuth,
  getIdToken,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import axios from '../api/axios';
import initializeAuthentication from '../Firebase/Firebase.init';

// initialize firebase app
initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true); // user using the login functionality
  const [authError, setAuthError] = useState('');
  const [roles, setRoles] = useState([]);
  const [token, setToken] = useState('');
  const [persist, setPersist] = useState(
    JSON.parse(localStorage.getItem('persist')) || false
  );

  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();

  const processSignInWithGoogle = (navigate, redirect_uri) => {
    setIsLoading(true); // user trying to log with google

    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        const { user } = result;
        // saveUser(user.displayName, user.email);

        setUser({
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
        });
        navigate(redirect_uri);
        setIsLoading(false);
      })
      .catch((error) => setAuthError(error.message));
  };

  //REGISTRATION PROCESS OF USER
  const processSignUp = (
    { name, email, dateOfBirth, password },
    redirect_uri,
    navigate
  ) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const {
          user: { emailVerified },
        } = result;

        setAuthError('');

        sendEmailVerification(auth.currentUser);

        const newUser = { name, email, dateOfBirth, emailVerified };

        setUser(newUser);

        // register user to the database
        registerToDB({ name, email, dateOfBirth, password });

        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => setAuthError(error.message));
        navigate(redirect_uri);
      })
      .catch((error) => {
        setAuthError(error.message);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  //USER LOGIN PROCESS
  const processSignIn = (email, password, location, navigate) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        loginToDB(email, password);
        const redirect_uri = location?.state?.from || '/';
        navigate(redirect_uri);
        setAuthError('');
      })
      .catch((error) => setAuthError(error.message))
      .finally(() => setIsLoading(false));
  };

  // change the user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        getIdToken(user).then((idToken) => console.log(idToken));
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false); // as the user state changed so we are not in loading state
    });
    return () => unsubscribed;
  }, [auth]);

  //process user logout
  const logout = () => {
    setIsLoading(true);
    return signOut(auth)
      .then(() => {
        // clear all info of the user
        logoutFromDB();
        setUser({});
        setAuthError('');
        setRoles([]);
        setToken('');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const registerToDB = async (newUser) => {
    const response = await axios.post('/auth/register', newUser);
    console.log(response?.data?.roles);
    console.log(response?.data?.accessToken);
    setRoles([...roles, response?.data?.roles]);
    setToken(response?.data?.accessToken);
    console.log(response?.data);
  };

  const loginToDB = async (email, password) => {
    try {
      const response = await axios.post(
        '/auth/login',
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      setRoles([...roles, response?.data?.roles]);
      setToken(response?.data?.accessToken);
      console.log(response?.data?.message);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logoutFromDB = async () => {
    const response = await axios.get('/auth/logout');

    console.log(response?.data);
  };

  return {
    user,
    isLoading,
    setIsLoading,
    setAuthError,
    roles,
    token,
    setToken,
    authError,
    processSignInWithGoogle,
    processSignUp,
    processSignIn,
    logout,
    persist,
    setPersist,
  };
};

export default useFirebase;
