import React from "react";
import styled from "styled-components";

interface ButtonProps {
  children: string;
  active?: boolean;
  onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
  const click = () => {
    props.onClick && props.onClick();
  };

  return (
    <ButtonStyle active={props.active || true} onClick={click}>
      {props.children}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button<{ active: boolean }>`
  cursor: ${(props) => (props.active ? "pointer" : "default")};
  background-color: ${(props) =>
    props.active ? "#0095f6" : "rgba(0, 149, 246, 0.3)"};
  border: 1px solid transparent;
  border-radius: 4px;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  width: 100%;
  height: 30px;
  padding: 5px;
  :focus {
    outline: none;
  }
`;
