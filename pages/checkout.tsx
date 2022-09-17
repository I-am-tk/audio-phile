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

// prevent user from going to this page if user is session is not present
// If cart is empty

export default Checkout;
