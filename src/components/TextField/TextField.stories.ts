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
  args: { label: "Default", type: "number" },
};

export const StandardTextField: Story = {
  args: {
    label: "Standard",
    variant: "standard",
  },
};

export const StandardTextFieldWithError: Story = {
  args: {
    label: "Standard Error",
    variant: "standard",
    error: `404 Error`,
  },
};

export const StandardTextFieldWithDisabled: Story = {
  args: {
    label: "Standard Disabled",
    variant: "standard",
    disabled: true,
  },
};

export const FilledEmailTextField: Story = {
  args: {
    label: "Filled",
    variant: "filled",
    type: "email",
  },
};

export const FilledEmailTextFieldWithError: Story = {
  args: {
    label: "Filled Error",
    variant: "filled",
    type: "email",
    error: `form submission error`,
  },
};

export const FilledEmailTextFieldWithDisabled: Story = {
  args: {
    label: "Filled Disabled",
    variant: "filled",
    type: "email",
    disabled: true,
  },
};

export const OutlinedPasswordTextField: Story = {
  args: {
    label: "Outlined",
    variant: "outlined",
    type: "password",
  },
};

export const OutlinedPasswordTextFieldWithError: Story = {
  args: {
    label: "Outlined Error",
    variant: "outlined",
    type: "password",
    error: `unable to fetch`,
  },
};

export const OutlinedPasswordTextFieldWithDisabled: Story = {
  args: {
    placeholder: "Outlined Disabled",
    variant: "outlined",
    type: "password",
    disabled: true,
  },
};
