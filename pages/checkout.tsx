import Container from "../components/ui/Container";
import CheckoutForm from "../components/CheckoutForm";
import { getServerSideProps } from ".";
function Checkout() {
  return (
    <Container className="px-6">
      <CheckoutForm />
    </Container>
  );
}

export default Checkout;
