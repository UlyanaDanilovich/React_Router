import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="app-header">
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
          <li>
            <NavLink to="/albums">Albums</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
