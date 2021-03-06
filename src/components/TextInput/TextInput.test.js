import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';

import {
  Value,
  // Width
} from './TextInput.stories'; //๐  Our story imported here

test('value์ ๋ค์ด๊ฐ ๊ธ์๋ฅผ ๋ณด์ฌ์ค์ผ ํ๋ค.', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Value {...Value.args} />, div);

  const input = div.querySelector('input');
  expect(input.value).toBe('ํ๊ธธ๋');

  ReactDOM.unmountComponentAtNode(div);
});

// test('width๋ฅผ ์กฐ์ ํ  ์ ์์ด์ผ ํ๋ค.', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Width {...Width.args} />, div);

//   const input = div.querySelector('input');
//   expect(input.offsetWidth).toBe(100);

//   ReactDOM.unmountComponentAtNode(div);
// });
