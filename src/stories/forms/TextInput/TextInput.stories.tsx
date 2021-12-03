import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextInput from './index';

export default {
  component: TextInput,
  title: 'Custom/TextInput',
} as ComponentMeta<typeof TextInput>; // props의 타입 설정

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const Default = Template.bind({});
// args에 필수 prop인 onChange를 비워두더라도 에러가 발생하지 않는다.
// 비워둬야 actions add-on이 정상 작동한다.
Default.args = {};

export const Value = Template.bind({});
Value.args = {
  ...Default.args,
  value: '홍길동',
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  ...Default.args,
  placeholder: '이름을 입력하세요',
};

export const Width = Template.bind({});
Width.args = {
  ...Default.args,
  width: 100,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  ...Default.args,
  fullWidth: true,
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  error: true,
  errorText: '오류가 발생했어요.',
};
