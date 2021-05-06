import { Container, Navbar as NB } from 'react-bootstrap-v5';

export default function Navbar() {
  return (
    <NB bg="dark" expand="lg" variant="dark" className="mb-4">
      <Container>
        <NB.Brand href="/">Better Rentals</NB.Brand>
      </Container>
    </NB>
  );
}
