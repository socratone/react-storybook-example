import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';

import { Default } from './TextInput.stories'; //👈  Our story imported here

it('value에 들어간 글자를 보여줘야 한다.', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Default {...Default.args} />, div);

  const input = div.querySelector('input');
  expect(input.value).toBe('가나다라');

  ReactDOM.unmountComponentAtNode(div);
});
