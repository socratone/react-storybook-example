import styled from 'styled-components';

interface IButtonProps {
  children: string;
  onClick: () => void;
}

const StyledButton = styled.button`
  border: 0;
  border-radius: 10px;
  padding: 10px;
  background-color: plum;
  color: white;
  cursor: pointer;

  :active {
    background-color: hotpink;
  }
`;

const Button: React.FC<IButtonProps> = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
