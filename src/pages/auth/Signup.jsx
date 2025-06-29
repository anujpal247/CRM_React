import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { signup } from "../../Redux/Slices/AuthSlice";

function Signup() {
  const [signupDetails, setSignupDetails] = useState({
    email: "",
    password: "",
    name: "",
    userType: "",
    userStatus: "",
    clientName: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleInputChange(identifier, value) {
    setSignupDetails({
      ...signupDetails,
      [identifier]: value,
    });
  }

  function handleReset() {
    setSignupDetails({
      email: "",
      password: "",
      name: "",
      userType: "",
      userStatus: "",
      clientName: "",
    });
  }

  async function handleSubmit() {
    console.log("sumitting..");
    if (signupDetails.userType === "customer") {
      signupDetails.userStatus = "approved";
    } else {
      signupDetails.userStatus = "suspended";
    }

    if (
      !signupDetails.email ||
      !signupDetails.name ||
      !signupDetails.password ||
      !signupDetails.userType ||
      !signupDetails.userStatus ||
      !signupDetails.clientName
    )
      return;
    console.log("sumitted!!");
    console.log(signupDetails);
    const response = await dispatch(signup(signupDetails));
    console.log(response);

    if (response.payload) {
      navigate("/login");
    }
    handleReset();
  }

  return (
    <div className="flex justify-center h-[90vh] items-center">
      <div className="card bg-primary text-primary-content w-96">
        <div className="card-body">
          <h2 className="card-title justify-center text-2xl text-slate-100 font-bold">
            Signup
          </h2>
          <input
            type="text"
            placeholder="name..."
            className="input input-primary text-white"
            onChange={(e) => handleInputChange("name", e.target.value)}
            value={signupDetails.name}
          />
          <input
            type="email"
            placeholder="xyz@example.com"
            className="input input-primary text-white"
            onChange={(e) => handleInputChange("email", e.target.value)}
            value={signupDetails.email}
          />
          <select
            defaultValue="User Type"
            className="select text-white"
            onChange={(e) => handleInputChange("userType", e.target.value)}
          >
            <option disabled={true}>User Type</option>
            <option value="admin">Admin</option>
            <option value="customer">Customer</option>
            <option value="engineer">Engineer</option>
          </select>
          <input
            type="password"
            placeholder="password"
            className="input input-primary text-white"
            onChange={(e) => handleInputChange("password", e.target.value)}
            value={signupDetails.password}
          />

          <input
            type="text"
            placeholder="client name..."
            className="input input-primary text-white"
            onChange={(e) => handleInputChange("clientName", e.target.value)}
            value={signupDetails.clientName}
          />
          <div className="card-actions justify-center">
            <button className="btn btn-warning" onClick={handleSubmit}>
              Signup
            </button>
          </div>
          <div className="text-center text-xl text-slate-100">
            Already have an account?{" "}
            <Link to="/login" className="text-yellow-300 hover:text-yellow-400">
              login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
