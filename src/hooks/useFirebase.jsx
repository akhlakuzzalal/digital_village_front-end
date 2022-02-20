import {
  createUserWithEmailAndPassword,
  getAuth,
  getIdToken,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
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
  const [roles, setRoles] = useState('roles', []);
  const [token, setToken] = useState('token', '');

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
  const processSignUp = (name, email, password, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const {
          user: { emailVerified },
        } = result;

        setAuthError('');

        sendEmailVerification(auth.currentUser);

        const newUser = { email, displayName: name, emailVerified };

        setUser(newUser);

        // register user to the database
        // saveUser(name, email);

        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => setAuthError(error.message));
        // navigate('/emailverify'); // navigate to the email verify page or homepage and give an alert to verify email
        navigate('/');
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
    loginToDB(email, password);
    // return signInWithEmailAndPassword(auth, email, password)
    //   .then(() => {
    //     const redirect_uri = location?.state?.from || '/';
    //     navigate(redirect_uri);
    //     setAuthError('');
    //   })
    //   .catch((error) => setAuthError(error.message))
    //   .finally(() => setIsLoading(false));
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

  // find the user role
  // useEffect(() => {
  //   axios
  //     .get(
  //       `find the role url?email=${user.email}`
  //     )
  //     .then((response) => setRole(response?.data?.admin));
  // }, [user.email]);

  //process user logout
  const logout = () => {
    setIsLoading(true);
    return signOut(auth)
      .then(() => {})
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const registerToDB = (name, email, dateOfBirth, password) => {
    console.log(name, email, dateOfBirth, password);
  };

  const loginToDB = async (email, password) => {
    console.log(email, password);
    try {
      const response = await axios.post('auth/login', {
        email,
        password,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return {
    user,
    isLoading,
    setIsLoading,
    setAuthError,
    roles,
    token,
    authError,
    processSignInWithGoogle,
    processSignUp,
    processSignIn,
    logout,
  };
};

export default useFirebase;
