import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Switch from "./Switch";

describe("Switch", () => {
  test("renders Switch with default props", () => {
    render(<Switch />);

    const switchElement = screen.getByRole("switch");
    expect(switchElement).toBeInTheDocument();
    expect(switchElement).toHaveClass("cursor-pointer");
  });

  test("renders Switch with custom className", () => {
    render(<Switch className="custom-switch" />);

    const switchElement = screen.getByRole("switch");
    expect(switchElement).toBeInTheDocument();
    expect(switchElement).toHaveClass("cursor-pointer");
    expect(switchElement).toHaveClass("custom-switch");
  });

  test("renders Switch with checked prop", () => {
    render(<Switch checked />);

    const switchElement = screen.getByRole("switch");
    expect(switchElement).toBeInTheDocument();
    expect(switchElement).toHaveClass("bg-blue-600");
  });

  test("renders Switch with disabled prop", () => {
    render(<Switch disabled />);

    const switchElement = screen.getByRole("switch");
    expect(switchElement).toBeInTheDocument();
    expect(switchElement).toHaveClass("pointer-events-none");
  });
});
