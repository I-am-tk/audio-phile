import { navLinks } from "data/nav-links";
import NavLink from "components/NavLink";
import { useSession, signIn, signOut } from "next-auth/react";
function NavLinks({ open = false, onClose = () => {} }: { open: boolean; onClose?: () => void }) {
  const { data: session, status } = useSession();

  return (
    <nav
      className={`fixed z-50 bg-black top-0 left-0 bottom-0  right-0 pt-16 md:static md:p-0 flex flex-col transform duration-300 md:opacity-1 ${
        !open
          ? "-translate-x-full opacity-0 md:opacity-1 md:translate-x-0"
          : "md:opacity-1 md:translate-x-0"
      }`}
    >
      <button
        type="button"
        aria-label="close"
        className="text-white p-2 border-2 absolute right-4 top-4 border-textLight md:hidden"
        onClick={onClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <ul className="flex flex-col md:flex-row px-8 gap-4">
        {navLinks.map((item) => (
          <li key={item.id} onClick={onClose}>
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
      <div className="md:hidden mt-auto">
        {session && (
          <button
            type="button"
            className="border-[1px] border-transparent text-gray hover:text-accent rounded-sm font-bold  px-4 py-2 bg-accent w-full"
            onClick={() => signOut()}
          >
            Signout
          </button>
        )}
        {!session && (
          <button
            type="button"
            className="border-[1px] border-transparent  text-accentLight hover:text-accent  rounded-sm font-bold  px-4 py-2"
            onClick={() => signIn()}
          >
            Signin
          </button>
        )}
      </div>
    </nav>
  );
}

export default NavLinks;
