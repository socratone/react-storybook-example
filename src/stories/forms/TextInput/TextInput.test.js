import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';

import {
  Value,
  // Width
} from './TextInput.stories'; //👈  Our story imported here

test('value에 들어간 글자를 보여줘야 한다.', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Value {...Value.args} />, div);

  const input = div.querySelector('input');
  expect(input.value).toBe('홍길동');

  ReactDOM.unmountComponentAtNode(div);
});

// test('width를 조절할 수 있어야 한다.', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Width {...Width.args} />, div);

//   const input = div.querySelector('input');
//   expect(input.offsetWidth).toBe(100);

//   ReactDOM.unmountComponentAtNode(div);
// });
