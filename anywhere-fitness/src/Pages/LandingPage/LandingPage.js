import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Logo from '../../ReusableComponents/Logo';
import landingPageImage from '../Images/landingPageImage.png';
import Button from '../../ReusableComponents/Button';

const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 800px;
  }
  h4 {
    width: 343px;
    font-size: 17px;
    font-weight: 500;
    color: #f7f7f7;
    line-height: 20px;
    letter-spacing: 0.36px;
    text-align: center;
  }
  button {
    margin-top: 80px;
  }
  p {
    font-size: 11px;
    line-height: 13px;
    width: 174px;
    font-style: normal;
    color: #f7f7f7;
    margin-top: 70px;
    text-align: center;
    letter-spacing: 0.36px;

    a {
      color: #ca1f3d;
    }
  }
`;

export default function LandingPage() {
  return (
    <LandingPageContainer>
      <Logo />

      <img src={landingPageImage} alt='Athletes working out.' />
      <h4>Attend classes that are run by local instructors, anywhere!</h4>

      <Link to='/accountType'>
        <Button textContent='Join Now!' />
      </Link>

      <p>
        Already have an account? <Link to='/login'>Log In.</Link>
      </p>
    </LandingPageContainer>
  );
}