import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
import { Right, Plus } from "icons";

const meta: Meta = {
  component: Button,
  title: "Design System/Button",
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
export const Primary: Story = { args: { variant: "primary" } };
export const Secondary: Story = { args: { variant: "secondary" } };
export const Tertiary: Story = { args: { variant: "tertiary" } };
export const Normal: Story = { args: { size: "normal" } };
export const Medium: Story = { args: { size: "medium" } };
export const Small: Story = { args: { size: "small" } };
export const IconRight: Story = { args: { rightIcon: Right } };
export const IconLeft: Story = { args: { leftIcon: Plus } };
export const Buttons = () => (
  <div className="space-x-2">
    <Button>Default</Button>
    <Button data-hover>Hover</Button>
    <Button data-focus>focus</Button>
    <Button data-active>Click</Button>
    <Button isLoading>Loading</Button>
    <Button isDisabled>Disabled</Button>
  </div>
);
Buttons.parameters = {
  pseudo: {
    hover: ["[data-hover]"],
    active: "[data-active]",
    focusVisible: ["[data-focus]"],
  },
};
