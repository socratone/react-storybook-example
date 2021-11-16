import TextInput from './index';

export default {
  component: TextInput,
  title: 'TextInput',
};

const Template = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '가나다라',
  onChange: () => {},
  placeholder: '값을 입력해주세요.',
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
  errorMessage: '오류가 발생했어요.',
};
