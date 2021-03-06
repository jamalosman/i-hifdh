import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';
const Title = styled.h1`
  color: white;
  text-decoration: none;
  font-size: 3rem;
  padding: 2px 0px;
`;

const TextBacKToHome = styled.p`
  color: white;
  margin: 0px 0px 10px 0px;
  display: none;
`;

const HeaderCss = styled.div`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover ${TextBacKToHome} {
    display: block;
  }
`;
type IHeader = { url?: string };
const Header = (props: IHeader) => {
  return (
    <HeaderCss>
      <Title as='a' href='/'>
        iHifdh
      </Title>
      {props.url !== undefined ? (
        <TextBacKToHome>Back to Home page</TextBacKToHome>
      ) : (
        ''
      )}
    </HeaderCss>
  );
};

export default Header;
