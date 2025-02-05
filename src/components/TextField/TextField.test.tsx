import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import TextField from "./TextField";

describe("TextField", () => {
  test("renders TextField with default props", () => {
    render(<TextField label="Default" />);

    const labelElement = screen.getByText("Default");
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveClass("text-lg");

    const textFieldElement = screen.getByTestId("textbox");
    expect(textFieldElement).toHaveClass("p-2");
    expect(textFieldElement).toHaveClass("focus:border-b-2");
    expect(textFieldElement).toHaveAttribute("type", "text");
  });

  //   Standard variant
  describe("Standard variant", () => {
    test("renders TextField with standard variant", () => {
      render(<TextField label="standard" variant="standard" />);

      const labelElement = screen.getByText("standard");
      expect(labelElement).toBeInTheDocument();
      expect(labelElement).toHaveClass("text-lg");

      const textFieldElement = screen.getByTestId("textbox");
      expect(textFieldElement).toBeInTheDocument();
      expect(textFieldElement).toHaveClass("focus:border-b-2");
    });

    test("renders standard TextField with error", () => {
      render(
        <TextField label="standard error" error="404" variant="standard" />,
      );

      const labelElement = screen.getByText("standard error");
      expect(labelElement).toBeInTheDocument();
      expect(labelElement).toHaveClass("text-lg");

      const textFieldElement = screen.getByTestId("textbox");
      expect(textFieldElement).toBeInTheDocument();
      expect(textFieldElement).toHaveClass("focus:border-b-2");
      expect(textFieldElement).toHaveClass("text-red-700");
      expect(textFieldElement).toHaveClass("placeholder-red-500");
      expect(textFieldElement).toHaveClass("border-red-700");

      const errorElement = screen.getByText("404");
      expect(errorElement).toBeInTheDocument();
      expect(errorElement).toHaveClass("text-red-700");
    });

    test("renders standard TextField with disabled", () => {
      render(
        <TextField label="standard disabled" disabled variant="standard" />,
      );

      const labelElement = screen.getByText("standard disabled");
      expect(labelElement).toBeInTheDocument();
      expect(labelElement).toHaveClass("text-lg");

      const textFieldElement = screen.getByTestId("textbox");
      expect(textFieldElement).toBeInTheDocument();
      expect(textFieldElement).toHaveClass("focus:border-b-2");
      expect(textFieldElement).toHaveClass("bg-gray-200");
      expect(textFieldElement).toHaveClass("pointer-events-none");
    });
  });

  //   Filled variant
  describe("Filled variant", () => {
    test("renders TextField with filled variant", () => {
      render(<TextField label="filled" variant="filled" />);

      const labelElement = screen.getByText("filled");
      expect(labelElement).toBeInTheDocument();
      expect(labelElement).toHaveClass("text-lg");

      const textFieldElement = screen.getByTestId("textbox");
      expect(textFieldElement).toBeInTheDocument();
      expect(textFieldElement).toHaveClass("bg-gray-300");
    });

    test("renders filled TextField with error", () => {
      render(
        <TextField
          label="filled error"
          error="form submission error"
          variant="filled"
        />,
      );

      const labelElement = screen.getByText("filled error");
      expect(labelElement).toBeInTheDocument();
      expect(labelElement).toHaveClass("text-lg");

      const textFieldElement = screen.getByTestId("textbox");
      expect(textFieldElement).toBeInTheDocument();
      expect(textFieldElement).toHaveClass("bg-red-100");
      expect(textFieldElement).toHaveClass("text-red-700");
      expect(textFieldElement).toHaveClass("placeholder-red-500");
      expect(textFieldElement).toHaveClass("border-red-700");

      const errorElement = screen.getByText("form submission error");
      expect(errorElement).toBeInTheDocument();
      expect(errorElement).toHaveClass("text-red-700");
    });

    test("renders filled TextField with disabled", () => {
      render(<TextField label="filled disabled" disabled variant="filled" />);

      const labelElement = screen.getByText("filled disabled");
      expect(labelElement).toBeInTheDocument();
      expect(labelElement).toHaveClass("text-lg");

      const textFieldElement = screen.getByTestId("textbox");
      expect(textFieldElement).toBeInTheDocument();
      expect(textFieldElement).toHaveClass("bg-gray-200");
      expect(textFieldElement).toHaveClass("pointer-events-none");
    });
  });

  //   Outlined variant
  describe("Outlined variant", () => {
    test("renders TextField with outlined variant", () => {
      render(<TextField label="outlined" variant="outlined" />);

      const labelElement = screen.getByText("outlined");
      expect(labelElement).toBeInTheDocument();
      expect(labelElement).toHaveClass("text-lg");

      const textFieldElement = screen.getByTestId("textbox");
      expect(textFieldElement).toBeInTheDocument();
      expect(textFieldElement).toHaveClass("border-1");
    });

    test("renders outlined TextField with error", () => {
      render(
        <TextField
          label="outlined error"
          error="unable to fetch"
          variant="outlined"
        />,
      );

      const labelElement = screen.getByText("outlined error");
      expect(labelElement).toBeInTheDocument();
      expect(labelElement).toHaveClass("text-lg");

      const textFieldElement = screen.getByTestId("textbox");
      expect(textFieldElement).toBeInTheDocument();
      expect(textFieldElement).toHaveClass("border-1");
      expect(textFieldElement).toHaveClass("text-red-700");
      expect(textFieldElement).toHaveClass("placeholder-red-500");
      expect(textFieldElement).toHaveClass("border-red-700");

      const errorElement = screen.getByText("unable to fetch");
      expect(errorElement).toBeInTheDocument();
      expect(errorElement).toHaveClass("text-red-700");
    });

    test("renders outlined TextField with disabled", () => {
      render(
        <TextField label="outlined disabled" disabled variant="outlined" />,
      );

      const labelElement = screen.getByText("outlined disabled");
      expect(labelElement).toBeInTheDocument();
      expect(labelElement).toHaveClass("text-lg");

      const textFieldElement = screen.getByTestId("textbox");
      expect(textFieldElement).toBeInTheDocument();
      expect(textFieldElement).toHaveClass("bg-gray-200");
      expect(textFieldElement).toHaveClass("pointer-events-none");
    });
  });
});
