import BestGear from "components/BestGear";
import CatagoryLinks from "components/CatogoryLinks";
import ProductGallery from "components/ProductGallery";
import Hero from "components/Hero";
import Container from "components/ui/Container";
import { unstable_getServerSession } from "next-auth/next";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { authOptions } from "./api/auth/[...nextauth]";
export default function Home() {
  const { data: session, status } = useSession();
  return (
    <div className="text-white">
      <Hero />
      <Container>
        <div className="px-6 ">
          <CatagoryLinks />
          <ProductGallery />
          <BestGear />
        </div>
      </Container>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);

  return {
    props: {
      session,
    },
  };
};
