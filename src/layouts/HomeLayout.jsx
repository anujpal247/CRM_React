import { useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { authActions } from "../Redux/Slices/AuthSlice";

export default function HomeLayout({ children }) {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(authActions.logout());
    navigate("/");
  }

  useEffect(() => {
    if (!authState.isLoggedIn) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="min-h-[90vh]">
      <div className="drawer absolute left-0 right-0">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer">
            <FiMenu size={32} className="cursor-pointer mt-4 ml-4" />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-[90vh] w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <a>View all tickets</a>
            </li>
            <li>
              <a>Dashboard</a>
            </li>
            <div className="absolute bottom-2 w-70 justify-end flex gap-4">
              {authState.isLoggedIn ? (
                <>
                  <button onClick={handleLogout} className="btn btn-primary">
                    Logout
                  </button>
                  <Link to="/profile" className="btn btn-secondary">
                    Profile
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login" className="btn btn-primary">
                    Login
                  </Link>
                  <Link to="/signup" className="btn btn-secondary">
                    Signup
                  </Link>
                </>
              )}
            </div>
          </ul>
        </div>
      </div>

      <div className="flex w-[90%] mx-auto justify-center">{children}</div>
    </div>
  );
}
