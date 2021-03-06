import React from 'react';
import styled from 'styled-components';
const Title = styled.h1`
  color: white;
  text-decoration: none;
  font-size: 3rem;
  padding: 2px 0px;
`;

const Subtitle = styled.p`
  color: white;
  margin: 0px 0px 10px 0px;
  display: none;
`;

const HeaderTag = styled.header`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover ${Subtitle} {
    display: block;
  }
`;
type IHeader = { url?: string };
const Header = (props: IHeader) => {
  return (
    <HeaderTag>
      <Title as='a' href='/'>
        iHifdh
      </Title>
      {props.url !== '/' &&  <Subtitle>Back to Home page</Subtitle>}
    </HeaderTag>
  );
};

export default Header;
