import React from 'react';
import { createContext, FC, useContext, useEffect, useState } from 'react';
import { LOCALSTORAGE_AUTH_TOKEN_KEY } from '../../constants';
import { ServiceError } from '@monocle/protos/generated/monocle_pb_service';
import { authenticate } from './authenticate';

const authContext = createContext<any>({});

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export const ProvideAuth: FC = ({ children }) => {
  const auth = useProvideAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => useContext(authContext);

// Provider hook that creates auth object and handles state
const useProvideAuth = () => {
  const [user, setUser] = useState<string>('');

  const login = async (username: string, password: string) => {
    let success;
    try {
      const { token } = await authenticate(username, password);

      if (token) {
        localStorage.setItem(LOCALSTORAGE_AUTH_TOKEN_KEY, token);
        setUser(token);
      } else {
        setUser('');
      }

      success = true;
    } catch (e) {
      const error = e as ServiceError;

      localStorage.removeItem(LOCALSTORAGE_AUTH_TOKEN_KEY);

      // handle error
      alert(error.message);
      success = false;
    } finally {
      return success;
    }
  };

  const logout = () => {
    localStorage.removeItem(LOCALSTORAGE_AUTH_TOKEN_KEY);
    setUser('');
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const token = localStorage.getItem(LOCALSTORAGE_AUTH_TOKEN_KEY);

    if (token) {
      setUser(token!);
    } else {
      setUser('');
    }
  }, []);

  // Return the user object and auth methods
  return {
    user,
    login,
    logout,
  };
};
