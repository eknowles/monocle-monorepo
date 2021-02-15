import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useAuth } from '../services/auth';

const AuthButton = () => {
  let history = useHistory();
  let auth = useAuth();

  return auth.user ? (
    <button
      onClick={() => {
        auth.logout();
        history.push('/');
      }}
    >
      Log out
    </button>
  ) : (
    <Link to={'/login'}>Log In</Link>
  );
};

export default AuthButton;
