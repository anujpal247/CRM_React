import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { login } from "../../Redux/Slices/AuthSlice";

function Login() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleEmailChange(event) {
    setEnteredEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setEnteredPassword(event.target.value);
  }

  async function handleSubmit() {
    console.log("submitting...");
    if (!enteredEmail || !enteredPassword) return;
    console.log(enteredEmail, enteredPassword);
    const data = {
      email: enteredEmail,
      password: enteredPassword,
    };
    const response = await dispatch(login(data));
    console.log(response);
    if (response.payload) {
      navigate("/");
    }
  }
  return (
    <div className="flex justify-center h-[90vh] items-center">
      <div className="card bg-primary text-primary-content w-96">
        <div className="card-body">
          <h2 className="card-title justify-center text-2xl text-slate-100 font-bold">
            Login
          </h2>
          <input
            type="text"
            placeholder="xyz@example.com"
            className="input input-primary text-white"
            onChange={handleEmailChange}
            value={enteredEmail}
          />
          <input
            type="password"
            placeholder="password"
            className="input input-primary text-white"
            onChange={handlePasswordChange}
            value={enteredPassword}
          />
          <div className="card-actions justify-center">
            <button className="btn btn-warning" onClick={handleSubmit}>
              Login
            </button>
          </div>
          <div className="text-center text-[20px] font-semibold text-slate-100">
            Dont have an account?{" "}
            <Link
              to="/signup"
              className="text-yellow-300 hover:text-yellow-400"
            >
              signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
