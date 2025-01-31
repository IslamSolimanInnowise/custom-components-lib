import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";

const meta: Meta<typeof Select> = {
  title: "Select",
  component: Select,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    options: [{ id: "1", title: "Option 1" }],
  },
};

export const WithLabel: Story = {
  args: {
    label: "Select",
    options: [{ id: "1", title: "Option 1" }],
  },
};

export const WithMultipleOptions: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState("1");

    const handleChange = (value: string) => {
      setSelectedValue(value);
    };

    return (
      <Select
        label="Multiple Options"
        options={[
          { id: "1", title: "Option 1" },
          { id: "2", title: "Option 2" },
          { id: "3", title: "Option 3" },
        ]}
        value={selectedValue}
        onChange={handleChange}
      />
    );
  },
};
