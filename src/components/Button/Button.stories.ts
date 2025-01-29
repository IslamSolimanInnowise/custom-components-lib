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

export const ContainedPrimary: Story = {
  args: {
    children: "Contained Primary",
    variant: "contained",
    color: "primary",
  },
};

export const ContainedSecondary: Story = {
  args: {
    children: "Contained Secondary",
    variant: "contained",
    color: "secondary",
  },
};

export const ContainedError: Story = {
  args: { children: "Contained Error", variant: "contained", color: "error" },
};

export const TextPrimary: Story = {
  args: { children: "Text Primary", variant: "text", color: "primary" },
};

export const TextSecondary: Story = {
  args: { children: "Text Secondary", variant: "text", color: "secondary" },
};

export const TextError: Story = {
  args: { children: "Text Error", variant: "text", color: "error" },
};

export const OutlinedPrimary: Story = {
  args: { children: "Outlined Primary", variant: "outlined", color: "primary" },
};

export const OutlinedSecondary: Story = {
  args: {
    children: "Outlined Secondary",
    variant: "outlined",
    color: "secondary",
  },
};

export const OutlinedError: Story = {
  args: { children: "Outlined Error", variant: "outlined", color: "error" },
};
