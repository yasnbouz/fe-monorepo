import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '.';
import { ArrowRight, Plus } from '@hu/icons';

const meta: Meta = {
  component: Button,
  title: 'atoms/Button',
  argTypes: {
    isLoading: {
      control: {
        type: 'boolean',
      },
    },
    isDisabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nIC5UpUdW47ZS6BBsovLBg/Design-System-(Community)?node-id=8%3A5&t=c9rM0sAsOYRru4ew-1',
    },
  },
  tags: ['autodocs'],
};
export default meta;

// Stories
type Story = StoryObj<typeof Button>;

const Default: Story = { args: { children: 'Label' } };

export const Primary: Story = { args: { ...Default.args, variant: 'primary' } };
export const Secondary: Story = {
  args: { ...Default.args, variant: 'secondary' },
};
export const Tertiary: Story = {
  args: { ...Default.args, variant: 'tertiary' },
};
export const Normal: Story = { args: { ...Default.args, size: 'normal' } };
export const Medium: Story = { args: { ...Default.args, size: 'medium' } };
export const Small: Story = { args: { ...Default.args, size: 'small' } };
export const IconRight: Story = {
  args: { ...Default.args, icon: <ArrowRight />, iconPosition: 'Right' },
};
export const IconLeft: Story = { args: { ...Default.args, icon: <Plus /> } };
export const Buttons: Story = {
  render: (args) => (
    <div className="space-y-4">
      <BtnGroup {...args} />
      <BtnGroup icon={<ArrowRight />} iconPosition="Right" {...args} />
      <BtnGroup icon={<Plus />} {...args} />
      <BtnGroup variant={'secondary'} {...args} />
      <BtnGroup
        variant={'secondary'}
        icon={<ArrowRight />}
        iconPosition="Right"
        {...args}
      />
      <BtnGroup variant={'secondary'} icon={<Plus />} {...args} />
      <BtnGroup variant={'tertiary'} {...args} />
      <BtnGroup
        variant={'tertiary'}
        icon={<ArrowRight />}
        iconPosition="Right"
        {...args}
      />
      <BtnGroup variant={'tertiary'} icon={<Plus />} {...args} />
    </div>
  ),
};
Buttons.parameters = {
  pseudo: {
    hover: ['[data-hover]'],
    active: '[data-active]',
    focusVisible: ['[data-focus]'],
  },
};
function BtnGroup(args: ButtonProps) {
  return (
    <div className="flex flex-wrap gap-2 items-center">
      <Button {...args}>Primary</Button>
      <Button {...args} data-hover>
        Hover
      </Button>
      <Button {...args} data-focus>
        focus
      </Button>
      <Button {...args} data-active>
        Click
      </Button>
      <Button {...args} isLoading>
        Loading
      </Button>
      <Button {...args} isDisabled>
        Disabled
      </Button>
    </div>
  );
}
