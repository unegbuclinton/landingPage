import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import ContactSection from '../../contactsection';
import Footer from '../../footer';
import FutureSection from '../../futuresection';
import HeroSection from '../../hero';
import Nav from '../../nav';
import NextStep from '../../nextStep';

function SinglePage() {
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Nav />} />
        </Routes>
        <HeroSection />
        <NextStep />
        <FutureSection />
        <ContactSection />
      </Wrapper>
      <Footer />
    </Router>
  );
}

export default SinglePage;

const Wrapper = styled.div`
  padding: 4.5rem 7.2rem;

  @media only screen and (max-width: 785px) {
    padding: 4.5rem 4.2rem;
  }
`;
