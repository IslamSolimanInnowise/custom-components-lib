import Button from "./components/Button/Button";
import Select from "./components/Select/Select";
import TextField from "./components/TextField/TextField";

const App: React.FC = () => {
  function handleClick() {
    console.log("Button Clicked");
  }
  return (
    <div>
      <h1 className="bg-red-500 m-9.5 mx-auto w-40 text-center">
        Hello, UI toolkit!
      </h1>
      {/* Button Component */}
      {/* <Button>Default</Button>
      <br />
      <Button variant="contained" color="primary">
        Contained
      </Button>
      <Button variant="contained" color="secondary">
        Contained
      </Button>
      <Button
        variant="contained"
        color="error"
        className="This-is-a-custom-class"
      >
        Contained
      </Button>
      <br />
      <Button variant="text" color="primary">
        Text
      </Button>
      <Button variant="text" color="secondary">
        Text
      </Button>
      <Button variant="text" color="error">
        Text
      </Button>
      <br />
      <Button variant="outlined" color="primary">
        Outlined
      </Button>
      <Button variant="outlined" color="secondary">
        Outlined
      </Button>
      <Button variant="outlined" color="error">
        Outlined
      </Button> */}

      <br />
      <br />

      {/* TextField */}
      {/* <TextField label="default" className="my-custom-class-name" />
      <br />
      <TextField label="standard" variant="standard" />
      <TextField label="standard error" variant="standard" error="404 error" />
      <TextField label="standard disabled" variant="standard" disabled />
      <br />
      <TextField label="filled" variant="filled" />
      <TextField
        label="filled error"
        variant="filled"
        error="form submission error"
      />
      <TextField label="filled disabled" variant="filled" disabled />
      <br />
      <TextField label="outlined" variant="outlined" />
      <TextField
        label="outlined error"
        variant="outlined"
        error="unable to fetch"
      />
      <TextField
        label="outlined disabled"
        variant="outlined"
        disabled
        id="test-id"
      /> */}

      {/* Select */}
      <Select
        id="test-id"
        className="test"
        baseValue="Please choose an option"
        onChange={() => console.log("changed")}
        options={[
          { id: "1", title: "Option 1" },
          { id: "2", title: "Option 2" },
        ]}
      />
    </div>
  );
};
export default App;
