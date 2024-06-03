import axios from 'axios';

const API_KEY = 'AIzaSyArcWEPMgWNyUwmmJ8rn-uc41d_busPoBs';

const signUp = async (email, password) => {
  try {
    const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
      email,
      password,
      returnSecureToken: true
    });
    console.log('User account created & signed in!', response.data);
    return response.data;
  } catch (error) {
    console.error('Sign Up Error:', error.response.data.error.message);
    throw new Error(error.response.data.error.message);
  }
};

const signIn = async (email, password) => {
  try {
    const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
      email,
      password,
      returnSecureToken: true
    });
    console.log('User signed in!', response.data);
    return response.data;
  } catch (error) {
    console.error('Sign In Error:', error.response.data.error.message);
    throw new Error(error.response.data.error.message);
  }
};
