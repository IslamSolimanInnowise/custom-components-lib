import { Meta, StoryObj } from "@storybook/react";
import TextField from "./TextField";

const meta: Meta<typeof TextField> = {
  title: "TextField",
  component: TextField,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: { placeholder: "Default TextField", type: "number" },
};

export const StandardTextField: Story = {
  args: {
    placeholder: "Standard TextField",
    variant: "standard",
    type: "text",
  },
};

export const StandardTextFieldWithError: Story = {
  args: {
    placeholder: "Standard Error TextField",
    variant: "standard",
    type: "text",
    error: true,
  },
};

export const StandardTextFieldWithDisabled: Story = {
  args: {
    placeholder: "Standard Disabled TextField",
    variant: "standard",
    type: "text",
    disabled: true,
  },
};

export const FilledEmailTextField: Story = {
  args: {
    placeholder: "Filled Email TextField",
    variant: "filled",
    type: "email",
  },
};

export const FilledEmailTextFieldWithError: Story = {
  args: {
    placeholder: "Filled Email Error",
    variant: "filled",
    type: "email",
    error: true,
  },
};

export const FilledEmailTextFieldWithDisabled: Story = {
  args: {
    placeholder: "Filled Email Disabled",
    variant: "filled",
    type: "email",
    disabled: true,
  },
};

export const OutlinedPasswordTextField: Story = {
  args: {
    placeholder: "Outlined Password TextField",
    variant: "outlined",
    type: "password",
  },
};

export const OutlinedPasswordTextFieldWithError: Story = {
  args: {
    placeholder: "Outlined Password Error",
    variant: "outlined",
    type: "password",
    error: true,
  },
};

export const OutlinedPasswordTextFieldWithDisabled: Story = {
  args: {
    placeholder: "Outlined Password Disabled",
    variant: "outlined",
    type: "password",
    disabled: true,
  },
};
