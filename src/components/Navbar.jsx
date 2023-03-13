import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 80px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  font-size: 1.3em;
  font-weight: bold;
  font-family: Monotype Corsiva;

  &:hover {
    color: darkviolet;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: darkviolet;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: violet;
    color: black;
  }
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Logo src="./img/logo.png" />
        <Icons>
          <Links>
            <List>
              <ListItem>Home</ListItem>
              <ListItem>Estudios</ListItem>
              <ListItem>Trabajos</ListItem>
              <ListItem>Contacto</ListItem>
            </List>
          </Links>
          <Icon src="./img/search.png" />
          <Button>Contratar</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
