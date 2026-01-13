import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import { selectUser } from "../redux/authSelectors";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <span>{user.email}</span>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default UserMenu;
