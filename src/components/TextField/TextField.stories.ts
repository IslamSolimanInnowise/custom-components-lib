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
  args: { label: "Default TextField", type: "number" },
};

export const StandardTextField: Story = {
  args: {
    label: "Standard TextField",
    variant: "standard",
    type: "text",
  },
};

export const StandardTextFieldWithError: Story = {
  args: {
    label: "Standard Error TextField",
    variant: "standard",
    type: "text",
    error: `404 Error`,
  },
};

export const StandardTextFieldWithDisabled: Story = {
  args: {
    label: "Standard Disabled TextField",
    variant: "standard",
    type: "text",
    disabled: true,
  },
};

export const FilledEmailTextField: Story = {
  args: {
    label: "Filled Email TextField",
    variant: "filled",
    type: "email",
  },
};

export const FilledEmailTextFieldWithError: Story = {
  args: {
    label: "Filled Email Error",
    variant: "filled",
    type: "email",
    error: `form submission error`,
  },
};

export const FilledEmailTextFieldWithDisabled: Story = {
  args: {
    label: "Filled Email Disabled",
    variant: "filled",
    type: "email",
    disabled: true,
  },
};

export const OutlinedPasswordTextField: Story = {
  args: {
    label: "Outlined Password TextField",
    variant: "outlined",
    type: "password",
  },
};

export const OutlinedPasswordTextFieldWithError: Story = {
  args: {
    label: "Outlined Password Error",
    variant: "outlined",
    type: "password",
    error: `unable to fetch`,
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
