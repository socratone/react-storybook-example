import { ComponentStory, ComponentMeta } from '@storybook/react';
import WithMdxDocumentation from './WithMdx.mdx';

import Badge from './Badge';

export default {
  title: 'MDX/WithMDX',
  component: Badge,
  parameters: {
    docs: {
      page: WithMdxDocumentation,
    },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: '과자',
};

export const Blue = Template.bind({});
Blue.args = {
  ...Default.args,
  color: 'blue',
};
