import styled from 'styled-components';

interface IContainer {
  children: React.ReactNode;
}

const StyledContainer = styled.div`
  padding: 10px;
  border: 1px solid gainsboro;
  border-radius: 5px;
`;

const Container: React.FC<IContainer> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
