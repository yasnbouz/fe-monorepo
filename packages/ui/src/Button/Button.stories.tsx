import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta: Meta = {
  component: Button,
  title: "Design System/Button",
  argTypes: {
    isLoading: {
      control: {
        type: "boolean",
      },
    },
    disabled: {
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
};
export default meta;

// Stories
type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { level: "primary" } };
export const Secondary: Story = { args: { level: "secondary" } };
export const Tertiary: Story = { args: { level: "tertiary" } };
export const Normal: Story = { args: { size: "normal" } };
export const Medium: Story = { args: { size: "medium" } };
export const Small: Story = { args: { size: "small" } };
