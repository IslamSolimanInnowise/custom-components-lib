// import "@testing-library/jest-dom";
// import { render, screen } from "@testing-library/react";
// import Select from "./Select";

// describe("Select", () => {
//   test("renders select with default props", () => {
//     render(<Select></Select>);
//     const selectElement = screen.getByRole("combobox");
//     expect(selectElement).toBeInTheDocument();
//     expect(selectElement).toHaveClass("cursor-pointer");

//     const arrowDiv = screen.getByRole("presentation");
//     expect(arrowDiv).toBeInTheDocument();
//     expect(arrowDiv).toHaveClass("pointer-events-none");
//   });

//   describe("when label prop is passed", () => {
//     test("renders select with label", () => {
//       render(<Select label="Select"></Select>);
//       const labelElement = screen.getByText("Select");
//       expect(labelElement).toBeInTheDocument();
//     });
//   });

//   describe("when children are passed", () => {
//     test("renders select with children", () => {
//       render(
//         <Select>
//           <option value="1">Option 1</option>
//           <option value="2">Option 2</option>
//         </Select>
//       );
//       const option1 = screen.getByText("Option 1");
//       const option2 = screen.getByText("Option 2");
//       expect(option1).toBeInTheDocument();
//       expect(option2).toBeInTheDocument();
//     });
//   });
// });
