import Logo from "components/Logo/Logo";
import CartIcon from "components/Icons/Cart";
import HamburgerMenu from "components/Icons/HamburgerMenu";
import NavLinks from "./NavLinks";
import NavLink from "components/NavLink";
import Container from "components/ui/Container";
import Backdrop from "components/Backdrop";
import CartModal from "components/CartModal";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useCartItems } from "hooks/useCartItems";

export default function Header() {
  const { data: session, status } = useSession();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems, isLoading, isError } = useCartItems();
  const [showMenu, setShowMenu] = useState(false);
  const modalOpenHandler = () => {
    setIsCartOpen(true);
  };
  const modalCloseHandler = () => {
    setIsCartOpen(false);
  };

  const totalQuantity = cartItems
    ? cartItems.reduce((total, { quantity }) => total + quantity, 0)
    : 0;

  useEffect(() => {
    if (showMenu) {
      document.body.style.height = "100vh";
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.height = "";
      document.body.style.overflowY = "";
    }
  }, [showMenu]);

  return (
    <header className="bg-black py-8 border-[1px] border-divider ">
      <Container>
        <div className="flex gap-4 items-center justify-between px-6  max-w-[72rem] m-auto">
          <NavLink href={"/"} className="sm:mr-[2.625rem] md:hidden">
            <HamburgerMenu onClick={() => setShowMenu(true)} />
          </NavLink>
          <NavLink href={"/"} className="sm:mr-auto md:mr-0">
            <Logo />
          </NavLink>
          <NavLinks open={showMenu} onClose={() => setShowMenu(false)} />
          <div className="flex align-center gap-2 ">
            <div className="hidden xs:flex">
              {session && (
                <button
                  type="button"
                  className="border-[1px] border-transparent text-gray hover:text-accent rounded-sm font-bold  px-4 py-2"
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
            <button type="button" className="sm:ml-auto md:ml-0 p-2">
              <div className="relative">
                {!!totalQuantity && (
                  <div
                    className="absolute z-10 bg-red-500 left-[60%] -top-[60%]  text-white font-normal tracking-wider px-[0.4rem]
                aspect-square rounded-full flex items-center text-[0.7rem]"
                  >
                    {totalQuantity}
                  </div>
                )}
                <CartIcon onClick={modalOpenHandler} />
              </div>
            </button>
          </div>
        </div>
      </Container>
      {isCartOpen && (
        <Backdrop onClose={modalCloseHandler}>
          <CartModal onClose={modalCloseHandler} />
        </Backdrop>
      )}
    </header>
  );
}
