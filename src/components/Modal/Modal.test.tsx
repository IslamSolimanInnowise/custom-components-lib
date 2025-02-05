import "@testing-library/jest-dom";
import { render, screen, act } from "@testing-library/react";
import React, { useState } from "react";
import Modal from "./Modal";

const Wrapper = () => {
  const [openModal, setOpenModal] = useState(false);

  function handleSwitchingModal() {
    act(() => setOpenModal((prev) => !prev));
  }

  return (
    <>
      <button onClick={handleSwitchingModal}>Open the Modal</button>
      <Modal open={openModal} onClose={handleSwitchingModal}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, et!
        </p>
      </Modal>
    </>
  );
};

describe("Modal", () => {
  test("renders modal with controlled props", () => {
    render(<Wrapper />);

    const modalElement = screen.getByTestId("modal");
    expect(modalElement).toBeInTheDocument();
    expect(modalElement).toHaveClass("w-screen");
    expect(modalElement).toHaveProperty("open", false);

    const modalContent = screen.getByTestId("modal-content");
    expect(modalContent).toBeInTheDocument();
    expect(modalContent).toHaveClass("bg-gray-300");

    const closeButton = screen.getByTestId("modal-close-button");
    expect(closeButton).toBeInTheDocument();
    expect(closeButton).toHaveClass("hover:bg-black");

    const openButton = screen.getByText("Open the Modal");
    expect(openButton).toBeInTheDocument();

    //testing opening the Modal
    openButton.click();
    expect(modalElement).toHaveProperty("open", true);

    //testing closing the modal
    closeButton.click();
    expect(modalElement).toHaveProperty("open", false);
  });
});
