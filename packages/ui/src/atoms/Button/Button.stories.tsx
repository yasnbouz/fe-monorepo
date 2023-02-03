import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
import { Right, Plus } from "@hu/icons";

const meta: Meta = {
  component: Button,
  title: "atoms/Button",
  argTypes: {
    isLoading: {
      control: {
        type: "boolean",
      },
    },
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/nIC5UpUdW47ZS6BBsovLBg/Design-System-(Community)?node-id=8%3A5&t=c9rM0sAsOYRru4ew-1",
    },
  },
  tags: ["autodocs"],
};
export default meta;

// Stories
type Story = StoryObj<typeof Button>;
const Default: Story = { args: { children: "Label" } };
export const Primary: Story = { args: { ...Default.args, variant: "primary" } };
export const Secondary: Story = {
  args: { ...Default.args, variant: "secondary" },
};
export const Tertiary: Story = {
  args: { ...Default.args, variant: "tertiary" },
};
export const Normal: Story = { args: { ...Default.args, size: "normal" } };
export const Medium: Story = { args: { ...Default.args, size: "medium" } };
export const Small: Story = { args: { ...Default.args, size: "small" } };
export const IconRight: Story = {
  args: { ...Default.args, icon: <Right />, iconPosition: "Right" },
};
export const IconLeft: Story = { args: { ...Default.args, icon: <Plus /> } };
export const Buttons: Story = {
  render: (args) => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 items-center">
        <Button {...args}>Primary</Button>
        <Button data-hover>Hover</Button>
        <Button data-focus>focus</Button>
        <Button data-active>Click</Button>
        <Button isLoading>Loading</Button>
        <Button isDisabled>Disabled</Button>
      </div>
      <div className="flex flex-wrap gap-2 items-center">
        <Button variant="secondary" {...args}>
          Secondary
        </Button>
        <Button variant="secondary" data-hover>
          Hover
        </Button>
        <Button variant="secondary" data-focus>
          focus
        </Button>
        <Button variant="secondary" data-active>
          Click
        </Button>
        <Button variant="secondary" isLoading>
          Loading
        </Button>
        <Button variant="secondary" isDisabled>
          Disabled
        </Button>
      </div>
      <div className="flex flex-wrap gap-2 items-center">
        <Button variant="tertiary" {...args}>
          Tertiary
        </Button>
        <Button variant="tertiary" data-hover>
          Hover
        </Button>
        <Button variant="tertiary" data-focus>
          focus
        </Button>
        <Button variant="tertiary" data-active>
          Click
        </Button>
        <Button variant="tertiary" isLoading>
          Loading
        </Button>
        <Button variant="tertiary" isDisabled>
          Disabled
        </Button>
      </div>
    </div>
  ),
};
Buttons.parameters = {
  pseudo: {
    hover: ["[data-hover]"],
    active: "[data-active]",
    focusVisible: ["[data-focus]"],
  },
};
