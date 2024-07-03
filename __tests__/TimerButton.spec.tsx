import { fireEvent, render,screen } from "@testing-library/react";
import TimerButton from "../src/components/TimerButton";
import React from "react";
describe("TimerButton", () => {
  test("should render STOP when in active mode", () => {
         const mockfunction=jest.fn()
    render(<TimerButton active={true} OnClick={mockfunction}/>);
    const stopbutton = screen.getByText("STOP")
    expect(stopbutton).toBeInTheDocument();
    fireEvent.click(stopbutton);
    expect(mockfunction).toBeCalled();
  });
  test("should render START when not in active mode", () => {
    const mockfunction=jest.fn()
    render(<TimerButton active={false} OnClick={mockfunction}/>);
    const stopbutton = screen.getByText("START")
    expect(stopbutton).toBeInTheDocument();
    fireEvent.click(stopbutton);
    expect(mockfunction).toBeCalled();
  });
});