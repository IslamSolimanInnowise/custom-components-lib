import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Switch from "./Switch";
import React, { useState } from "react";

const Wrapper = () => {
  const [switchState, setSwitchState] = useState(false);

  function handleSwitchChange() {
    setSwitchState((prev) => !prev);
    // console.log("changed");
  }

  return <Switch checked={switchState} onChange={handleSwitchChange} />;
};

describe("Switch", () => {
  test("renders Switch with default props", () => {
    render(<Switch />);

    const switchElement = screen.getByTestId("switch");
    expect(switchElement).toBeInTheDocument();
    expect(switchElement).toHaveClass("cursor-pointer");

    const input = screen.getByTestId("input");
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass("opacity-0");

    const slider = screen.getByTestId("slider");
    expect(slider).toBeInTheDocument();
    expect(slider).toHaveClass("bg-gray-400");
  });

  test("renders Switch with checked prop", () => {
    render(<Switch checked />);
    const slider = screen.getByTestId("slider");
    expect(slider).toHaveClass("bg-blue-400");
  });

  test("renders Switch with disabled prop", () => {
    render(<Switch disabled />);
    const switchElement = screen.getByTestId("switch");
    expect(switchElement).toHaveClass("pointer-events-none");
  });

  test("renders Switch with onChange prop", () => {
    render(<Wrapper />);

    const switchElement = screen.getByTestId("switch");
    expect(switchElement).toBeInTheDocument();

    const input = screen.getByTestId("input");
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass("opacity-0");

    const slider = screen.getByTestId("slider");
    expect(slider).toBeInTheDocument();
    expect(slider).toHaveClass("bg-gray-400");

    switchElement.click();
    expect(slider).toHaveClass("bg-blue-400");
  });
});
