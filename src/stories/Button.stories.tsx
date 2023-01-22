import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, BUTTON_TYPE_CLASSES } from '../components/Button/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  isLoading: false,
  buttonType: BUTTON_TYPE_CLASSES.BASE,
  children: 'Button'
};

export const Inverted = Template.bind({});
Inverted.args = {
  isLoading: false,
  buttonType: BUTTON_TYPE_CLASSES.INVERTED,
  children: 'Button',
};
