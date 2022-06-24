import React from 'react';
import styled from 'styled-components';

interface IButtonProps {
  children: string;
  onClick?: () => void;
}

const StyledButton = styled.button`
  background-color: dodgerblue;
  color: white;
  border: 0;
  border-radius: 10px;
  padding: 10px;
`;

const Button: React.FC<IButtonProps> = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
