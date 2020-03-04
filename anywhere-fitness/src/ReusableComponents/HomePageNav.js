import React from 'react';
import styled from 'styled-components';

import accountIcon from '../Pages/Images/accountIcon.png';
import searchIcon from '../Pages/Images/searchIcon.png';
import calendarIcon from '../Pages/Images/calendarIcon.png';
import settingIcon from '../Pages/Images/settingIcon.png';

import Logo from './Logo';

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;

  h1 {
    font-size: 27px;
    line-height: 32px;
  }
  .icons {
    width: 200px;
    display: flex;
    justify-content: space-between;

    img {
      width: 30px;
      height: 30px;
    }
  }
`;

export default function HomePageNav() {
  return (
    <NavContainer>
      <Logo />

      <section className='icons'>
        <img src={accountIcon} />
        <img src={searchIcon} />
        <img src={calendarIcon} />
        <img src={settingIcon} />
      </section>
    </NavContainer>
  );
}
