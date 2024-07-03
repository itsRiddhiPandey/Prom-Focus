import { fireEvent, render,screen } from "@testing-library/react";
import NextButton from "../src/components/NextButton";
import React from "react";
describe("NextButton", () => {
  it("should render the next button and onclick triggers the function", () => {
    const mockfunction=jest.fn();
    render(<NextButton OnClick={mockfunction}/>);
    const nextButton=screen.getByTestId("next-button");
    expect(nextButton).toBeInTheDocument();
    fireEvent.click(nextButton);
    expect(mockfunction).toHaveBeenCalled();
  });
});