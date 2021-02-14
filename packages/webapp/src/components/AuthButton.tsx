import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useAuth } from '../services/auth';

const AuthButton = () => {
  let history = useHistory();
  let auth = useAuth();

  return auth.user ? (
    <p>
      Welcome!{' '}
      <button
        className="bg-ned-blue"
        onClick={() => {
          auth.logout();
          history.push('/');
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>
      You are not logged in. <Link to={'/login'}>login</Link>
    </p>
  );
};

export default AuthButton;
