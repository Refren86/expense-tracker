import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Table } from '../components/Table/Table';

export default {
  title: 'UI/Table',
  component: Table,
  argTypes: {
    rows: {
      table: {
        disable: true,
      },
    },
    headers: {
      table: {
        disable: true
      }
    }
  },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  rows: [
    ['This', 'is', 'just', 'a', 'test'],
    ['This', 'is', 'also', 'a', 'test'],
    ['Just', 'a', 'little', 'more', 'data'],
    ['Row', 'number', 'four', 'right', 'here'],
  ],
  headers: ['Col 1', 'Col 2', 'Col 3', 'Col 4', 'Col 5'],
};
