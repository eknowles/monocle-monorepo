import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { RootState } from '../redux';
import { serverSlice } from '../redux/modules/server';

const AuthButton = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuthed = useSelector<RootState>(
    (state) => state.server.authenticated,
  );

  return isAuthed ? (
    <button
      onClick={() => {
        dispatch(serverSlice.actions.logout());
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
