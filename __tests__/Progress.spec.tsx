import {render,screen } from "@testing-library/react";
import ProgressBar from "../src/components/ProgressBar";
import React from "react";
describe("Progress", () => {
  it("should render progress bar", () => {
    render(<ProgressBar progress={50} />);
    const progressbar= screen.getByTestId("progress-bar");
    expect(progressbar).toBeInTheDocument();
    expect(progressbar).toHaveStyle("width : 50%");
  });
});