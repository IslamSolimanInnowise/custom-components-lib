import { useState } from "react";
import Button from "./components/Button/Button";
import Select from "./components/Select/Select";
import TextField from "./components/TextField/TextField";

const App: React.FC = () => {
  // function handleClick() {
  //   console.log("Button Clicked");
  // }

  const [selectedValue, setSelectedValue] = useState("1");

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
    console.log("Selected ID:", value);
  };

  return (
    <div>
      <h1 className="bg-red-500 m-9.5 mx-auto w-40 text-center">
        Hello, UI toolkit!
      </h1>

      <br />
      <br />
      <Select
        label="Choose an option"
        options={[
          { id: "1", title: "Title 1" },
          { id: "2", title: "Title 2" },
        ]}
        value={selectedValue}
        onChange={handleSelectChange}
        id="check-if-id-exists"
        className="extra-class-check"
      />
    </div>
  );
};
export default App;
