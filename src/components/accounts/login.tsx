import React, { FormEvent, useContext, useState } from "react";
import styled from "styled-components";
import icons from "assets/img/icons.png";
import { Flex } from "styledComponent";
import { Input, Button } from "components";
import { UserContext } from "context";

export const LoginComponent = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const contextValue = useContext(UserContext);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    contextValue.setLoggedIn(true);
  };

  return (
    <Container>
      <Login icons={icons}>
        <h1>instagram</h1>
        <div className="wrapper">
          <form onSubmit={submit}>
            <div className="login-item">
              <Input
                type="text"
                label="Phone number, username, or email"
                value={id}
                setValue={setId}
              />
            </div>
            <div className="login-item">
              <Input
                type="password"
                label="Password"
                value={pw}
                setValue={setPw}
              />
            </div>
            <div className="login-actions">
              <Button active={!!(id && pw)}>Log In</Button>
            </div>
          </form>
        </div>
      </Login>
    </Container>
  );
};

const Container = styled(Flex)`
  max-width: 350px;
`;

const Login = styled.div<{ icons: string }>`
  border: 1px solid #dbdbdb;
  border-radius: 1px;
  margin: 0 0 10px;
  padding: 10px 0;
  width: 100%;
  max-width: 350px;
  h1 {
    margin: 22px auto 12px;
    background-size: 440px 411px;
    height: 51px;
    width: 175px;
    background-image: url(${(props) => props.icons});
    background-position: 0 -129px;
    text-indent: 110%;
    overflow: hidden;
    font-size: 12px;
  }
  .wrapper {
    margin-top: 24px;
    .login-item {
      margin: 0 40px 6px;
    }
    .login-actions {
      margin: 8px 40px;
    }
  }
`;
