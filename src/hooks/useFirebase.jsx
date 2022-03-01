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
import { useDispatch, useSelector } from 'react-redux';
import axios, { axiosPrivate } from '../api/axios';
import initializeAuthentication from '../Firebase/Firebase.init';
import { setRoles, setToken, setUser } from '../redux/slices/user/userSlice';

// initialize firebase app
initializeAuthentication();

const useFirebase = () => {
  const user = useSelector((state) => state.user.user);
  const [isLoading, setIsLoading] = useState(true); // user using the login functionality
  const [authError, setAuthError] = useState('');
  const roles = useSelector((state) => state.user.roles);
  const token = useSelector((state) => state.user.token);

  const dispatch = useDispatch();

  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();

  const processSignInWithGoogle = (navigate) => {
    setIsLoading(true); // user trying to log with google

    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        const { user } = result;

        // REGISTER USER IN DATABASE
        registerToDB({
          name: user.displayName,
          email: user.email,
          dateOfBirth: 'unknown',
          password: 'noneedofpassword',
        });

        dispatch(
          setUser({
            name: user.displayName,
            email: user.email,
            dateOfBirth: 'unknown',
            emailVerified: user.emailVerified,
          })
        );
        navigate('/');
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

        dispatch(setUser(newUser));

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
        dispatch(setUser(user));
      } else {
        dispatch(setUser({}));
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
        dispatch(setUser({}));
        setAuthError('');
        dispatch(setRoles([]));
        dispatch(setToken(''));
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const registerToDB = async (newUser) => {
    const response = await axios.post('/auth/register', newUser);
    dispatch(setRoles([...roles, response?.data?.roles]));
    dispatch(setToken(response?.data?.accessToken));
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
      dispatch(setRoles([...roles, response?.data?.roles]));
      dispatch(setToken(response?.data?.accessToken));
      console.log(response?.data?.message);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logoutFromDB = async () => {
    const response = await axiosPrivate.get('/auth/logout');

    console.log(response?.data);
  };

  return {
    user,
    isLoading,
    setIsLoading,
    setAuthError,
    roles,
    setRoles,
    token,
    setToken,
    authError,
    processSignInWithGoogle,
    processSignUp,
    processSignIn,
    logout,
  };
};

export default useFirebase;
