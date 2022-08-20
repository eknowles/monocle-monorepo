import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { RootState } from "../redux";
import { serverSlice } from "../redux/modules/server";

const AuthButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthed = useSelector<RootState>(
    (state) => state.server.authenticated
  );


  if (isAuthed) {
    const handleLogout = () => {
      dispatch(serverSlice.actions.logout());
      navigate("/login");
    }

    return (
      <button onClick={handleLogout}>
        <FormattedMessage
          id="log-out"
          description="log out"
          defaultMessage="Log Out"
        />
      </button>
    )
  }

  return (
    <NavLink to={"/login"}>
      <FormattedMessage
        id="log-in"
        description="log in"
        defaultMessage="Log In"
      />
    </NavLink>
  )
};

export default AuthButton;
