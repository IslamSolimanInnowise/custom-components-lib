import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { children: "Default" },
};

export const Contained: Story = {
  args: { children: "Contained", variant: "contained" },
};

export const Text: Story = {
  args: { children: "Text", variant: "text" },
};

export const Outlined: Story = {
  args: { children: "Outlined", variant: "outlined" },
};

export const Primary: Story = {
  args: { children: "Primary", color: "primary" },
};

export const Secondary: Story = {
  args: { children: "Secondary", color: "secondary" },
};

export const Error: Story = {
  args: { children: "Error", color: "error" },
};
