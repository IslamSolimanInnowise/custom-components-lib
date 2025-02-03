import { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: { label: "Default" },
};

export const CustomWithBlueLabelAndAmberContainer: Story = {
  args: {
    label: "Custom",
    labelClassName: "custom-label text-blue-500",
    containerClassName: "custom-container bg-amber-200",
  },
};

export const DisabledAndChecked: Story = {
  args: { label: "Disabled", disabled: true, checked: true },
};

export const DisabledAndUnchecked: Story = {
  args: { label: "Disabled", disabled: true, checked: false },
};
