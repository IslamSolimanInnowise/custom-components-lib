import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "Modal",
  component: Modal,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    open: true,
    children: (
      <div className="p-4">
        <h2 className="text-xl font-bold">Modal Title</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    ),
  },
};

export const CustomStyled: Story = {
  args: {
    open: true,
    className: "bg-blue-500 bg-opacity-80",
    modalContentClassName: "bg-white rounded-lg p-6 shadow-lg h-40",
    closeClassName: "text-red-500 hover:text-red-700",
    children: (
      <div className="p-4">
        <h2 className="text-xl font-bold">Custom Styled Modal</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat,
          non.
        </p>
      </div>
    ),
  },
};
