import styled from 'styled-components';

type TextInputProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  name?: string;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  placeholder?: string;
  width?: number;
  fullWidth?: boolean;
  type?: React.HTMLInputTypeAttribute;
};

const TextInput = ({
  value,
  onChange,
  name,
  error,
  errorMessage,
  disabled,
  placeholder,
  width = 200,
  fullWidth,
  type,
}: TextInputProps) => {
  const setWidth = () => {
    if (fullWidth) return undefined;
    if (width) return width + 'px';
  };

  const setInputStyle = () => {
    if (error) {
      return {
        border: '1px solid red',
      };
    }
    return {};
  };

  if (disabled) {
    return (
      <Container style={{ width: setWidth() }}>
        <DisabledInput
          type={type}
          value={value}
          onChange={onChange}
          name={name}
          disabled
          placeholder={placeholder}
          style={setInputStyle()}
        />

        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Container>
    );
  }

  return (
    <Container style={{ width: setWidth() }}>
      <Input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        style={setInputStyle()}
      />

      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
};

const Container = styled.div``;

const Input = styled.input`
  border: 1px solid gainsboro;
  border-radius: 10px;
  height: 50px;
  font-size: 16px;
  padding: 0 10px;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

const DisabledInput = styled(Input)`
  background: whitesmoke;
  color: gainsboro;
  cursor: not-allowed;
`;

const ErrorMessage = styled.div`
  margin-top: 5px;
  color: red;
  font-size: 14px;
`;

export default TextInput;
