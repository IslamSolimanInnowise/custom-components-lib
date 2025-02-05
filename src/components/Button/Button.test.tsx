import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import Button from "./Button";

describe("Button", () => {
  test("renders button with default props", () => {
    render(<Button>Default</Button>);
    const buttonElement = screen.getByText("Default");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("text-white");
    expect(buttonElement).toHaveClass("bg-blue-600");
  });

  //contained button tests
  describe("renders button with contained variant and different colors", () => {
    test("renders button with contained variant and primary colors", () => {
      render(
        <Button variant="contained" color="primary">
          Contained
        </Button>
      );
      const buttonElement = screen.getByText("Contained");
      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement).toHaveClass("text-white");
      expect(buttonElement).toHaveClass("bg-blue-600");
    });

    test("renders button with contained variant and secondary colors", () => {
      render(
        <Button variant="contained" color="secondary">
          Contained
        </Button>
      );
      const buttonElement = screen.getByText("Contained");
      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement).toHaveClass("text-white");
      expect(buttonElement).toHaveClass("bg-purple-600");
    });

    test("renders button with contained variant and error colors", () => {
      render(
        <Button variant="contained" color="error">
          Contained
        </Button>
      );
      const buttonElement = screen.getByText("Contained");
      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement).toHaveClass("text-white");
      expect(buttonElement).toHaveClass("bg-red-600");
    });
  });

  //text button tests
  describe("renders button with text variant and different colors", () => {
    test("renders button with text variant and primary colors", () => {
      render(
        <Button variant="text" color="primary">
          Text
        </Button>
      );
      const buttonElement = screen.getByText("Text");
      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement).toHaveClass("px-2");
      expect(buttonElement).toHaveClass("text-blue-600");
    });

    test("renders button with text variant and secondary colors", () => {
      render(
        <Button variant="text" color="secondary">
          Text
        </Button>
      );
      const buttonElement = screen.getByText("Text");
      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement).toHaveClass("px-2");
      expect(buttonElement).toHaveClass("text-purple-600");
    });

    test("renders button with text variant and error colors", () => {
      render(
        <Button variant="text" color="error">
          Text
        </Button>
      );
      const buttonElement = screen.getByText("Text");
      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement).toHaveClass("px-2");
      expect(buttonElement).toHaveClass("text-red-600");
    });
  });

  //outlined button tests
  describe("renders button with outlined variant and different colors", () => {
    test("renders button with outlined variant and primary colors", () => {
      render(
        <Button variant="outlined" color="primary">
          Outlined
        </Button>
      );
      const buttonElement = screen.getByText("Outlined");
      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement).toHaveClass("border");
      expect(buttonElement).toHaveClass("text-blue-600");
    });

    test("renders button with contained variant and secondary colors", () => {
      render(
        <Button variant="outlined" color="secondary">
          Outlined
        </Button>
      );
      const buttonElement = screen.getByText("Outlined");
      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement).toHaveClass("border");
      expect(buttonElement).toHaveClass("text-purple-600");
    });

    test("renders button with contained variant and error colors", () => {
      render(
        <Button variant="outlined" color="error">
          Outlined
        </Button>
      );
      const buttonElement = screen.getByText("Outlined");
      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement).toHaveClass("border");
      expect(buttonElement).toHaveClass("text-red-600");
    });
  });
});
