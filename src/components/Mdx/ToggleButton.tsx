import React from 'react';
import styled from 'styled-components';

interface IToggleButtonProps {
  children: string;
  selected: boolean;
  onChange: (selected: boolean) => void;
}

const StyledToggleButton = styled.button<{ selected: boolean }>`
  background-color: ${({ selected }) => (selected ? 'dodgerblue' : 'tomato')};
  color: white;
  border: 0;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
`;

const ToggleButton: React.FC<IToggleButtonProps> = ({
  children,
  selected,
  onChange,
}) => {
  const handleClick = () => {
    onChange(!selected);
  };

  return (
    <StyledToggleButton selected={selected} onClick={handleClick}>
      {children}
    </StyledToggleButton>
  );
};

export default ToggleButton;
