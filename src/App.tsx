import React from "react";
import { useState } from "react";
import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";

const App: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

  function handleSwitchingModal() {
    // if (openModal) {
    //   console.log("closed");
    // }

    setOpenModal((prev) => !prev);
  }

  return (
    <div>
      <h1 className="bg-red-500 m-9.5 mx-auto w-40 text-center">
        Hello, UI toolkit!
      </h1>

      <br />

      {/* <button>Open The Modal</button> */}
      <Button onClick={handleSwitchingModal}>Open The Modal</Button>
      <Modal open={openModal} onClose={handleSwitchingModal}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, et!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
          assumenda magnam ratione! Provident accusantium recusandae asperiores
          mollitia maiores distinctio consectetur!
        </p>
      </Modal>
    </div>
  );
};
export default App;
