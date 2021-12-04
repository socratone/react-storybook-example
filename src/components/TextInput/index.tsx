import styled from 'styled-components';

export type TextInputProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  name?: string;
  /**
   * true일 때 빨간색 테두리가 생긴다.
   */
  error?: boolean;
  /**
   * input 아래에 빨간색 글자를 나타낸다.
   */
  errorText?: string;
  disabled?: boolean;
  placeholder?: string;
  width?: number;
  fullWidth?: boolean;
  type?: 'password';
};

/**
 * 글자를 입력할 수 있는 input 입니다.
 */
const TextInput = ({
  value,
  onChange,
  name,
  error,
  errorText,
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

        {errorText && <ErrorText>{errorText}</ErrorText>}
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

      {errorText && <ErrorText>{errorText}</ErrorText>}
    </Container>
  );
};

const Container = styled.div``;

const Input = styled.input`
  box-sizing: border-box;
  border: 1px solid gainsboro;
  border-radius: 10px;
  height: 40px;
  font-size: 16px;
  color: #333;
  padding: 0 10px;
  width: 100%;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: grey;
  }
`;

const DisabledInput = styled(Input)`
  background: whitesmoke;
  color: gainsboro;
  cursor: not-allowed;
`;

const ErrorText = styled.div`
  margin-top: 5px;
  color: red;
  font-size: 14px;
`;

export default TextInput;
