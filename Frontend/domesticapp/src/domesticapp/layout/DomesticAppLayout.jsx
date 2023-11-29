import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store/slices/user/userSlice";
import "../styles/DomesticAppLayout.css";
import { Footer } from "../components/Footer";

export const DomesticAppLayout = ({ children }) => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="app_layout">
      <div className="navbar bg-base-100 p-12">
        <div className="navbar-start">
          <Link className="btn btn-ghost text-xl nav_logo" to={"/"}>
            DomesticApp
          </Link>
        </div>
        <div className="navbar-end px-2">
          <a className="btn btn-warning text-2xl px-6" onClick={onLogout}>
            Salir
          </a>
        </div>
      </div>
      <main>
        {children}
        </main>
      {/* Footer */}
      <Footer/>
    </div>
  );
};
