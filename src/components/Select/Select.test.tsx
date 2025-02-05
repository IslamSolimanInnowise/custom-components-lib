import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Select from "./Select";
import React from "react";
import { useState } from "react";

const Wrapper = () => {
  const [selectedValue, setSelectedValue] = useState("1");

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <Select
      label="Select"
      value={selectedValue}
      onChange={handleSelectChange}
      options={[
        { id: "1", title: "Title 1" },
        { id: "2", title: "Title 2" },
      ]}
    />
  );
};

describe("Select", () => {
  test("renders select with default props", () => {
    render(<Wrapper />);

    const selectElement = screen.getByTestId("combobox");
    expect(selectElement).toBeInTheDocument();
    expect(selectElement).toHaveClass("cursor-pointer");

    const arrowDiv = screen.getByTestId("presentation");
    expect(arrowDiv).toBeInTheDocument();
    expect(arrowDiv).toHaveClass("pointer-events-none");

    const option1 = screen.getByText("Title 1");
    const option2 = screen.getByText("Title 2");
    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
  });

  describe("when label prop is passed", () => {
    test("renders select with label", () => {
      render(<Wrapper />);
      const labelElement = screen.getByText("Select");
      expect(labelElement).toBeInTheDocument();
    });
  });
});
