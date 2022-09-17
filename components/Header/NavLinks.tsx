import { navLinks } from "../../data/nav-links";
import NavLink from "../NavLink";
function NavLinks() {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-4">
        {navLinks.map((item) => (
          <li key={item.id}>
            <NavLink
              href={item.url}
              className="uppercase text-white hover:text-accentLight font-bold text-[0.9rem] tracking-wider"
              active="text-accent"
            >
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavLinks;
