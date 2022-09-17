import Header from "../components/Header";
import Footer from "../components/Footer";
import { AppProps } from "next/dist/shared/lib/router/router";
import "../styles/globals.css";

import { SessionProvider } from "next-auth/react";
import { NextPage } from "next";

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Header />
      <Component {...pageProps} />;
      <Footer />
    </SessionProvider>
  );
}

export default App;
