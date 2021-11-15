import React, { useState } from 'react';
import styled from 'styled-components';
import { OptionProps } from './Option';
import { ReactComponent as ArrowIcon } from '../../assets/arrow.svg';

type SelectProps = {
  value: string;
  children: React.ReactElement<OptionProps>[];
  placeholder?: string;
  onChange: (value: string) => void;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  width?: number;
};

const Select = ({
  value,
  onChange,
  placeholder,
  width = 200,
  error,
  errorMessage,
  disabled,
  fullWidth,
  children,
}: SelectProps) => {
  const [open, setOpen] = useState(false);

  const handleClickSelect = () => {
    setOpen((open) => !open);
  };

  const handleClickOption = (value: string) => {
    onChange(value);
    setOpen(false);
  };

  const handleClickBackground = () => {
    setOpen(false);
  };

  const setValueLabel = (value: string) => {
    const child = children.find((child) => child.props.value === value);
    return child!.props.children;
  };

  const setContainerWidth = () => {
    if (fullWidth) return undefined;
    return width + 'px';
  };

  if (disabled) {
    return (
      <Container style={{ width: setContainerWidth() }}>
        <DisabledSelectContainer>
          {value && <Value>{setValueLabel(value)}</Value>}
          {!value && <Placeholder>{placeholder}</Placeholder>}
          {open && <UpArrowIcon fill="gainsboro" />}
          {!open && <DownArrowIcon fill="gainsboro" />}
        </DisabledSelectContainer>
      </Container>
    );
  }

  return (
    <>
      <Container style={{ width: setContainerWidth() }}>
        <SelectContainer
          onClick={handleClickSelect}
          style={{ borderColor: error ? 'red' : undefined }}
        >
          {value && <Value>{setValueLabel(value)}</Value>}
          {!value && <Placeholder>{placeholder}</Placeholder>}
          {open && <UpArrowIcon fill="grey" />}
          {!open && <DownArrowIcon fill="grey" />}
        </SelectContainer>

        {open && (
          <Dropdown>
            {children.map((child) => (
              <child.type
                {...child.props}
                key={child.props.value}
                onClick={() => handleClickOption(child.props.value)}
              >
                {child.props.children}
              </child.type>
            ))}
          </Dropdown>
        )}
      </Container>

      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

      {open && <Background onClick={handleClickBackground} />}
    </>
  );
};

const Container = styled.div`
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
`;

const DisabledSelectContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 25px 0 10px;
  border: 1px solid gainsboro;
  border-radius: 10px;
  cursor: not-allowed;
  background: whitesmoke;
  position: relative;
  z-index: 2;

  & * {
    color: gainsboro !important;
  }
`;

const SelectContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 25px 0 10px;
  border: 1px solid gainsboro;
  border-radius: 10px;
  cursor: pointer;
  background: white;
  position: relative;
  z-index: 2;

  &:hover {
    background: #f3f3f3;
  }

  &:active {
    background: #e9e9e9;
  }
`;

const ErrorMessage = styled.div`
  margin-top: 5px;
  color: red;
  font-size: 14px;
`;

const DownArrowIcon = styled(ArrowIcon)`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%) rotate(180deg);
  width: 8px;
  height: 8px;
`;

const UpArrowIcon = styled(ArrowIcon)`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
`;

const Dropdown = styled.div`
  position: absolute;
  z-index: 3;
  background: white;
  overflow: hidden;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 100;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
`;

const Placeholder = styled.div`
  color: grey;
`;

const Value = styled.div`
  color: black;
`;

export default Select;
