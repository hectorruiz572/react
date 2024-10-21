import "./Layout.css";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Consulta</Link>
          </li>
          <li>
            <Link to="/Alta">Alta</Link>
          </li>
          <li>
            <Link to="/Baja">Baja</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
