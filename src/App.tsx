import { useState } from "react";
import Button from "./components/Button/Button";
import Select from "./components/Select/Select";
import TextField from "./components/TextField/TextField";
import Checkbox from "./components/Checkbox/Checkbox";

const App: React.FC = () => {
  return (
    <div>
      <h1 className="bg-red-500 m-9.5 mx-auto w-40 text-center">
        Hello, UI toolkit!
      </h1>

      <br />
      <br />

      <Checkbox
        label="Checkbox"
        labelClassName="test-label"
        containerClassName="flex-col-reverse"
      />
      <Checkbox label="Checkbox 2" />
    </div>
  );
};
export default App;
