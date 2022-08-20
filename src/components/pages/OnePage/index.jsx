import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
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
      </Wrapper>
    </Router>
  );
}

export default SinglePage;

const Wrapper = styled.div`
  padding: 9.8rem 9.3rem;
`;
