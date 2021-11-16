import React, { useState } from 'react';
import styled from 'styled-components';
import Option from './stories/forms/Option';
import Select from './stories/forms/Select';
import TextInput from './stories/forms/TextInput';

function App() {
  const [value, setValue] = useState('');
  const [text, setText] = useState('');

  const handleChange = (value: string) => {
    setValue(value);
  };

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <Container>
      <div style={{ marginBottom: '10px' }}>
        <Select
          value={value}
          onChange={handleChange}
          placeholder="값을 선택하세요."
          width={300}
        >
          <Option value="1">자바스크립트</Option>
          <Option value="2">파이썬</Option>
          <Option value="3" disabled>
            코틀린
          </Option>
        </Select>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <Select
          value={value}
          onChange={handleChange}
          placeholder="값을 선택하세요."
          width={300}
          error
          errorMessage="필수 입력 값입니다."
        >
          <Option value="1">자바스크립트</Option>
          <Option value="2">파이썬</Option>
          <Option value="3">코틀린</Option>
        </Select>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <Select
          value={value}
          onChange={handleChange}
          placeholder="값을 선택하세요."
          width={300}
          disabled
        >
          <Option value="1">자바스크립트</Option>
          <Option value="2">파이썬</Option>
          <Option value="3">코틀린</Option>
        </Select>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <TextInput
          value={text}
          onChange={handleChangeText}
          placeholder="값을 입력하세요."
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <TextInput value={text} onChange={handleChangeText} disabled />
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 20px;
`;

export default App;
