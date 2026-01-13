import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { Modal } from "./Modal";

const AuthModal = ({ onClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    dispatch(login({ email }));
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="Email" required />
        <button type="submit">Login</button>
      </form>
    </Modal>
  );
};

export default AuthModal;
