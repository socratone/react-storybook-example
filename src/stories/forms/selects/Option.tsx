import styled from 'styled-components';

export type OptionProps = {
  value: string;
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

const Option = ({ onClick, disabled, children }: OptionProps) => {
  if (disabled) {
    return (
      <DisabledContainer>
        <DisabledText>{children}</DisabledText>
      </DisabledContainer>
    );
  }

  return (
    <Container onClick={onClick}>
      <Text>{children}</Text>
    </Container>
  );
};

const DisabledContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  cursor: not-allowed;
`;

const DisabledText = styled.div`
  color: grey;
`;

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
