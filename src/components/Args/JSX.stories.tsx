import { ComponentStory, ComponentMeta } from '@storybook/react';

import Container from './Container';

export default {
  title: 'Args/ComplexArgValues',
  component: Container,
  argTypes: {
    children: {
      options: ['hello', 'world', 'korea'],
      // mapping을 이용해서 object와 같은 complex value를 select 방식으로 선택할 수 있다.
      // https://storybook.js.org/docs/react/writing-stories/args#mapping-to-complex-arg-values
      mapping: {
        hello: <strong>hello</strong>,
        world: <span>world</span>,
        korea: <em>korea</em>,
      },
    },
  },
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: <div>hello</div>,
};
