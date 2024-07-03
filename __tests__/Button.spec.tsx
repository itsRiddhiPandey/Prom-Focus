import { fireEvent, render,screen } from "@testing-library/react";
import Button from "../src/components/Button";
import React from "react";
describe("Button", () => {
  it("should render the button", () => {
         const mockfunction=jest.fn()
    render(<Button OnClick={mockfunction}>Button</Button>);
    const button = screen.getByText("Button");
    expect(button).toBeInTheDocument()
    fireEvent.click(button);
    expect(mockfunction).toHaveBeenCalled();
  });
});