import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

interface InputProps {
  label: string;
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  type: "password" | "text";
}

export const Input = (props: InputProps) => {
  let [value, setValue] = useState("");

  const [isFocused, setIsFocused] = useState(false);
  const updateField = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target?.value);
    if (props.setValue) {
      props.setValue(e.target?.value);
    }
  };
  const toggleFocused = () => {
    setIsFocused(!isFocused);
  };
  return (
    <InputContainer isFocused={isFocused}>
      <label className={value && "active"}>
        <span>{props.label}</span>
        <input
          type={props.type}
          onChange={updateField}
          onFocus={toggleFocused}
          onBlur={toggleFocused}
        ></input>
      </label>
      <div></div>
    </InputContainer>
  );
};

const InputContainer = styled.div<{ isFocused: boolean }>`
  height: 36px;
  display: flex;
  border: 1px solid #dbdbdb;
  border-color: ${(props) => (props.isFocused ? "#a8a8a8" : "#dbdbdb")};
  border-radius: 3px;
  label {
    width: 100%;
    position: relative;
    cursor: text;
    overflow: hidden;
    border-radius: 3px;
    span {
      height: 36px;
      line-height: 36px;
      font-size: 12px;
      color: #8e8e8e;
      position: absolute;
      left: 8px;
      white-space: nowrap;
      transform-origin: left;
    }
    input {
      height: 20px;
      width: 100%;
      border: 0;
      outline: none;
      padding: 9px 0 7px 8px;
      line-height: 18px;
    }
  }
  .active {
    > span {
      transform: scale(0.83333) translateY(-10px);
      transition: transform ease-out 0.1s, -webkit-transform ease-out 0.1s;
    }
    input {
      padding: 14px 0 2px 8px;
    }
  }
`;
