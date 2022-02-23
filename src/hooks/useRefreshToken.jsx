import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
  const { setToken, setRoles } = useAuth();

  const refresh = async () => {
    try {
      const response = await axios.get('/auth/refresh', {
        withCredentials: true,
      });
      setToken(response?.data?.accessToken);
      setRoles(response?.data?.roles);
      return response?.data?.accessToken;
    } catch (error) {
      console.log(error.message);
    }
  };
  return refresh;
};

export default useRefreshToken;
