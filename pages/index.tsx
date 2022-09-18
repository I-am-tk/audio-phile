import BestGear from "components/BestGear";
import CatagoryLinks from "components/CatogoryLinks";
import ProductGallery from "components/ProductGallery";
import Hero from "components/Hero";
import Container from "components/ui/Container";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { GetServerSideProps } from "next";
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
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};
