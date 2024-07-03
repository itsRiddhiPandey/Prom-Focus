import { render,screen } from "@testing-library/react";
import ModeButton from "../src/components/ModeButton";
import React from "react";
describe("ModeButon", () => {
  it("should render the mode button with the active mode classname", () => {
    const mockfunction=jest.fn();
    render(<ModeButton active={true} OnClick={mockfunction}>Pomodoro</ModeButton>);
    const button=screen.getByTestId("mode-button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-modebackground")
  });
  it("shouldn't have active mode classname if the active property is false", () => {
         const mockfunction=jest.fn();
         render(<ModeButton active={false} OnClick={mockfunction}>Pomodoro</ModeButton>);
         const button=screen.getByTestId("mode-button");
         expect(button).toBeInTheDocument();
         expect(button).not.toHaveClass("bg-modebackground")
       });
});