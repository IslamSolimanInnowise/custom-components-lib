import classes from "./app.module.css";
import Button from "./components/Button/Button";

const App: React.FC = () => {
  return (
    <div>
      <h1 className={classes.h1}>Hello, UI toolkit!</h1>
      {/* Button Component */}
      <Button>Default</Button>
      <Button variant="contained" color="primary">
        Contained
      </Button>
      <Button variant="contained" color="secondary">
        Contained
      </Button>
      <Button variant="contained" color="error">
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
