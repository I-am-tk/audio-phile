import Header from "../components/Header";
import Footer from "../components/Footer";
import { AppProps } from "next/app";
import "styles/globals.css";

import { SessionProvider } from "next-auth/react";
import { NextPage } from "next";
import { Session } from "next-auth";
import { useCartItems } from "hooks/useCartItems";

function App({ Component, pageProps: { session, ...pageProps } }: AppProps<{ session?: Session }>) {
  const { cartItems } = useCartItems();
  return (
    <SessionProvider session={session}>
      <Header />
      <Component {...pageProps} />;
      <Footer />
    </SessionProvider>
  );
}

export default App;
