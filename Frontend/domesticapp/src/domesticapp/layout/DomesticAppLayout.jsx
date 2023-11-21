import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../store/slices/user/userSlice";

export const DomesticAppLayout = ({ children }) => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="flex flex-col h-screen justify-between">
      <div className="navbar bg-base-100 p-8">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>
          <Link className="btn btn-ghost text-xl" to={"/"}>
            DomesticApp
          </Link>
        </div>
        <div className="navbar-end px-2">
          <a className="btn btn-warning text-xl px-6" onClick={onLogout}>
            Salir
          </a>
        </div>
      </div>
      <main className="mb-auto">{children}</main>
      {/* Footer */}
      <footer className="bg-base-100 text-white text-center p-8 text-2xl">
        © 2023 DomesticApp
      </footer>
    </div>
  );
};
