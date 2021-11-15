import React, { useState } from 'react';
import styled from 'styled-components';
import Option from './stories/forms/selects/Option';
import Select from './stories/forms/selects/Select';

function App() {
  const [value, setValue] = useState('');

  const handleChange = (value: string) => {
    setValue(value);
  };

  return (
    <Container>
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
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 20px;
`;

export default App;
