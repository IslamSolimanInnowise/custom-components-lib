import { useState } from "react";
import Button from "./components/Button/Button";
import Select from "./components/Select/Select";
import TextField from "./components/TextField/TextField";
import Checkbox from "./components/Checkbox/Checkbox";
import Switch from "./components/Switch/Switch";

const App: React.FC = () => {
  const [switchState, setSwitchState] = useState(false);

  function handleSwitchChange() {
    setSwitchState((prev) => !prev);
    console.log("changed");
  }

  return (
    <div>
      <h1 className="bg-red-500 m-9.5 mx-auto w-40 text-center">
        Hello, UI toolkit!
      </h1>

      <br />

      <Switch className="my-custom-class" />
      <br />
      <Switch checked={switchState} onChange={handleSwitchChange} />
      <br />
      <Switch disabled />
      <br />
      <Switch disabled checked />
    </div>
  );
};
export default App;
