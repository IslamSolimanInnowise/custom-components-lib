import Button from "./components/Button/Button";
import TextField from "./components/TextField/TextField";

const App: React.FC = () => {
  return (
    <div>
      <h1 className="bg-red-500 m-9.5 mx-auto w-40 text-center">
        Hello, UI toolkit!
      </h1>
      {/* Button Component */}
      <Button>Default</Button>
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
      </Button>

      <br />
      <br />

      {/* TextField */}
      <TextField placeholder="default" className="my-custom-class-name" />
      <br />
      <TextField placeholder="standard" variant="standard" />
      <TextField placeholder="standard error" variant="standard" error />
      <TextField placeholder="standard disabled" variant="standard" disabled />
      <br />
      <TextField placeholder="filled" variant="filled" />
      <TextField placeholder="filled error" variant="filled" error />
      <TextField placeholder="filled disabled" variant="filled" disabled />
      <br />
      <TextField placeholder="outlined" variant="outlined" />
      <TextField placeholder="outlined error" variant="outlined" error />
      <TextField placeholder="outlined disabled" variant="outlined" disabled />
    </div>
  );
};
export default App;
