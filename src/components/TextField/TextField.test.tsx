import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TextField from "./TextField";

describe("TextField", () => {
  test("renders TextField with default props", () => {
    render(<TextField placeholder="placeholder" />);
    const textFieldElement = screen.getByPlaceholderText("placeholder");
    expect(textFieldElement).toBeInTheDocument();
    expect(textFieldElement).toHaveClass("p-2");
    expect(textFieldElement).toHaveClass("focus:border-b-2");
    expect(textFieldElement).toHaveAttribute("type", "text");
  });

  //   Standard variant
  describe("Standard variant", () => {
    test("renders TextField with standard variant", () => {
      render(<TextField placeholder="placeholder" variant="standard" />);
      const textFieldElement = screen.getByPlaceholderText("placeholder");
      expect(textFieldElement).toBeInTheDocument();
      expect(textFieldElement).toHaveClass("focus:border-b-2");
    });

    test("renders TextField with error", () => {
      render(<TextField placeholder="placeholder" error variant="standard" />);
      const textFieldElement = screen.getByPlaceholderText("placeholder");
      expect(textFieldElement).toBeInTheDocument();
      expect(textFieldElement).toHaveClass("focus:border-b-2");
      expect(textFieldElement).toHaveClass("text-red-700");
      expect(textFieldElement).toHaveClass("placeholder-red-500");
      expect(textFieldElement).toHaveClass("border-red-700");
    });

    test("renders TextField with disabled", () => {
      render(
        <TextField placeholder="placeholder" disabled variant="standard" />
      );
      const textFieldElement = screen.getByPlaceholderText("placeholder");
      expect(textFieldElement).toBeInTheDocument();
      expect(textFieldElement).toHaveClass("focus:border-b-2");
      expect(textFieldElement).toHaveClass("bg-gray-200");
      expect(textFieldElement).toHaveClass("pointer-events-none");
    });
  });

  //   Filled variant
  describe("Filled variant", () => {
    test("renders TextField with filled variant", () => {
      render(<TextField placeholder="placeholder" variant="filled" />);
      const textFieldElement = screen.getByPlaceholderText("placeholder");
      expect(textFieldElement).toBeInTheDocument();
      expect(textFieldElement).toHaveClass("bg-gray-300");
    });

    test("renders TextField with error", () => {
      render(<TextField placeholder="placeholder" error variant="filled" />);
      const textFieldElement = screen.getByPlaceholderText("placeholder");
      expect(textFieldElement).toBeInTheDocument();
      expect(textFieldElement).toHaveClass("bg-red-100");
      expect(textFieldElement).toHaveClass("text-red-700");
      expect(textFieldElement).toHaveClass("placeholder-red-500");
      expect(textFieldElement).toHaveClass("border-red-700");
    });

    test("renders TextField with disabled", () => {
      render(<TextField placeholder="placeholder" disabled variant="filled" />);
      const textFieldElement = screen.getByPlaceholderText("placeholder");
      expect(textFieldElement).toBeInTheDocument();
      expect(textFieldElement).toHaveClass("bg-gray-200");
      expect(textFieldElement).toHaveClass("pointer-events-none");
    });
  });

  //   Outlined variant
  describe("Outlined variant", () => {
    test("renders TextField with outlined variant", () => {
      render(<TextField placeholder="placeholder" variant="outlined" />);
      const textFieldElement = screen.getByPlaceholderText("placeholder");
      expect(textFieldElement).toBeInTheDocument();
      expect(textFieldElement).toHaveClass("border-1");
    });

    test("renders TextField with error", () => {
      render(<TextField placeholder="placeholder" error variant="outlined" />);
      const textFieldElement = screen.getByPlaceholderText("placeholder");
      expect(textFieldElement).toBeInTheDocument();
      expect(textFieldElement).toHaveClass("border-1");
      expect(textFieldElement).toHaveClass("text-red-700");
      expect(textFieldElement).toHaveClass("placeholder-red-500");
      expect(textFieldElement).toHaveClass("border-red-700");
    });

    test("renders TextField with disabled", () => {
      render(
        <TextField placeholder="placeholder" disabled variant="outlined" />
      );
      const textFieldElement = screen.getByPlaceholderText("placeholder");
      expect(textFieldElement).toBeInTheDocument();
      expect(textFieldElement).toHaveClass("bg-gray-200");
      expect(textFieldElement).toHaveClass("pointer-events-none");
    });
  });
});
