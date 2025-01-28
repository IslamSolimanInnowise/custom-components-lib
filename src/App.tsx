import Button from "./components/Button/Button";

const App: React.FC = () => {
  return (
    <div>
      <h1 className="bg-red-500 m-9.5 mx-auto w-40 text-center">
        Hello, UI toolkit!
      </h1>
      {/* Button Component */}
      <Button>Default</Button>
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
      <Button variant="text" color="primary">
        Text
      </Button>
      <Button variant="text" color="secondary">
        Text
      </Button>
      <Button variant="text" color="error">
        Text
      </Button>
      <Button variant="outlined" color="primary">
        Outlined
      </Button>
      <Button variant="outlined" color="secondary">
        Outlined
      </Button>
      <Button variant="outlined" color="error">
        Outlined
      </Button>
    </div>
  );
};
export default App;
