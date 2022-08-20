import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-center mb-10">
      <h1 className="text-4xl mb-4 font-bold">PokeAPI React + Tailwind</h1>
      <nav className="flex justify-center space-x-4 text-red-600 font-semibold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-black border-black border-b-4 pb-1" : null
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-black border-black border-b-4 pb-1" : null
          }
        >
          About
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
