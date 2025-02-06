# custom-components-lib

## Task

This project is a UI kit library designed to provide a set of reusable and customizable components for building user interfaces. The library includes various components such as buttons, checkboxes, modals, selects, switches, and text fields. Each component is built with React and styled using Tailwind CSS, ensuring a consistent and modern look and feel.

You can find the detailed task description [here](https://drive.google.com/file/d/1C148FRnWfXVoRDslDWcYac3bEhebdIAV/view).

## How to Run the App

Follow these steps to install the necessary modules, start the app, and run the Storybook and tests:

### Installation

1- Clone the repository:

```sh
git clone https://github.com/IslamSolimanInnowise/custom-components-lib.git
cd custom-components-lib
```

2- Install the dependencies:

```sh
npm install
```

### Running the App

To start the development server and view the app in your browser, run:

```sh
npm start
```

This will start the Webpack development server on port 3000. Open your browser and navigate to `http://localhost:3000` to see the app.

### Running Storybook

To view and interact with the components in Storybook, run:

```sh
npm run storybook
```

This will start the Storybook server on port 6006. Open your browser and navigate to `http://localhost:6006` to explore the components.

### Building the Project

To build the project for production, run:

```sh
npm run build
```

This will create a `dist` directory with the optimized production build.

### Running Tests

To run the unit tests, use:

```sh
npm test
```

This will execute the tests using Jest and display the results in the terminal.

### Linting the Code

To lint the code and ensure it follows the coding standards, run:

```sh
npm run lint
```

This will run ESLint and display any linting errors or warnings.

### Additional Scripts

`npm run build-storybook`: Builds the Storybook for production.
`npm run tailwind:init`: Initializes Tailwind CSS configuration.

### Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes. Make sure to follow the coding standards and write tests for any new features or bug fixes.
