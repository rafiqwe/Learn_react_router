import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 h-16 ">
      <nav className="flex justify-between items-center">
        <div className="text-lg font-bold">My Website</div>
        <ul className="flex space-x-4 gap-16">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "active " : "hover:text-gray-400"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hover:text-gray-400">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-gray-400">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/movie" className="hover:text-gray-400">
              Movie
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
