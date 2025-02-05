import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import Checkbox from "./Checkbox";

describe("Checkbox", () => {
  test("renders checkbox with default props", () => {
    render(<Checkbox label="Default" />);

    const checkboxElement = screen.getByTestId("checkbox");
    expect(checkboxElement).toBeInTheDocument();
    expect(checkboxElement).toHaveClass("w-4 h-4");

    const labelElement = screen.getByText("Default");
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveClass("font-medium");
  });

  test("renders checkbox with custom props", () => {
    render(
      <Checkbox
        label="Custom"
        labelClassName="custom-label"
        className="custom-checkbox"
        containerClassName="custom-container"
      />
    );

    const checkboxElement = screen.getByTestId("checkbox");
    expect(checkboxElement).toHaveClass("custom-checkbox");

    const labelElement = screen.getByText("Custom");
    expect(labelElement).toHaveClass("custom-label");

    const container = labelElement.parentElement;
    expect(container).toHaveClass("custom-container");
  });
});
