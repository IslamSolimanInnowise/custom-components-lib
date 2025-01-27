import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  test("renders button with default props", () => {
    render(<Button>Default</Button>);
    const buttonElement = screen.getByText("Default");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("btn");
    expect(buttonElement).toHaveClass("contained");
  });

  //contained button tests
  test("renders button with contained variant and different colors", () => {
    render(
      <Button variant="contained" color="primary">
        Contained
      </Button>
    );
    const buttonElement = screen.getByText("Contained");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("btn");
    expect(buttonElement).toHaveClass("contained");
    expect(buttonElement).toHaveClass("primary");
  });
  test("renders button with contained variant and different colors", () => {
    render(
      <Button variant="contained" color="secondary">
        Contained
      </Button>
    );
    const buttonElement = screen.getByText("Contained");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("btn");
    expect(buttonElement).toHaveClass("contained");
    expect(buttonElement).toHaveClass("secondary");
  });
  test("renders button with contained variant and different colors", () => {
    render(
      <Button variant="contained" color="error">
        Contained
      </Button>
    );
    const buttonElement = screen.getByText("Contained");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("btn");
    expect(buttonElement).toHaveClass("contained");
    expect(buttonElement).toHaveClass("error");
  });

  //text button tests
  test("renders button with text variant and different colors", () => {
    render(
      <Button variant="text" color="primary">
        Text
      </Button>
    );
    const buttonElement = screen.getByText("Text");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("btn");
    expect(buttonElement).toHaveClass("text");
    expect(buttonElement).toHaveClass("primary");
  });
  test("renders button with contained variant and different colors", () => {
    render(
      <Button variant="text" color="secondary">
        Text
      </Button>
    );
    const buttonElement = screen.getByText("Text");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("btn");
    expect(buttonElement).toHaveClass("text");
    expect(buttonElement).toHaveClass("secondary");
  });
  test("renders button with contained variant and different colors", () => {
    render(
      <Button variant="text" color="error">
        Text
      </Button>
    );
    const buttonElement = screen.getByText("Text");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("btn");
    expect(buttonElement).toHaveClass("text");
    expect(buttonElement).toHaveClass("error");
  });

  //outlined button tests
  test("renders button with outlined variant and different colors", () => {
    render(
      <Button variant="outlined" color="primary">
        Outlined
      </Button>
    );
    const buttonElement = screen.getByText("Outlined");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("btn");
    expect(buttonElement).toHaveClass("outlined");
    expect(buttonElement).toHaveClass("primary");
  });
  test("renders button with contained variant and different colors", () => {
    render(
      <Button variant="outlined" color="secondary">
        Outlined
      </Button>
    );
    const buttonElement = screen.getByText("Outlined");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("btn");
    expect(buttonElement).toHaveClass("outlined");
    expect(buttonElement).toHaveClass("secondary");
  });
  test("renders button with contained variant and different colors", () => {
    render(
      <Button variant="outlined" color="error">
        Outlined
      </Button>
    );
    const buttonElement = screen.getByText("Outlined");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("btn");
    expect(buttonElement).toHaveClass("outlined");
    expect(buttonElement).toHaveClass("error");
  });
});
