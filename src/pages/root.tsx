import React, { useContext } from "react";
import { Button } from "components";
import { Container } from "styledComponent";
import styled from "styled-components";
import { UserContext } from "context";
import { customHistory } from "App";

export const RootPage = () => {
  const contextValue = useContext(UserContext);

  const logout = () => {
    contextValue.setLoggedIn(false);
  };

  return (
    <Container>
      <RootContainer>
        <Button onClick={logout}>logout</Button>
        <Button
          onClick={() => {
            customHistory.push("/auth");
          }}
        >
          auth page
        </Button>
      </RootContainer>
    </Container>
  );
};

const RootContainer = styled(Container)`
  max-width: 350px;
`;
