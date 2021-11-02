import React from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { RootState } from "../redux";
import { serverSlice } from "../redux/modules/server";

const AuthButton = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuthed = useSelector<RootState>(
    (state) => state.server.authenticated
  );

  return isAuthed ? (
    <button
      onClick={() => {
        dispatch(serverSlice.actions.logout());
        history.push("/");
      }}
    >
      <FormattedMessage
        id="log-out"
        description="log out"
        defaultMessage="Log Out"
      />
    </button>
  ) : (
    <Link to={"/login"}>
      <FormattedMessage
        id="log-in"
        description="log in"
        defaultMessage="Log In"
      />
    </Link>
  );
};

export default AuthButton;
