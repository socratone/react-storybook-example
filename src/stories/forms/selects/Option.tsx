import styled from 'styled-components';

export type OptionProps = {
  value: string;
  onClick?: () => void;
  children: React.ReactNode;
};

const Option = ({ onClick, children }: OptionProps) => {
  return (
    <Container onClick={onClick}>
      <Text>{children}</Text>
    </Container>
  );
};

const Container = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;

  &:hover {
    background: #f3f3f3;
  }

  &:active {
    background: #e9e9e9;
  }
`;

const Text = styled.div`
  color: black;
`;

export default Option;
