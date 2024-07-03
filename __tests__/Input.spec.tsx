import { render, screen } from "@testing-library/react";
import Input from "../src/components/Input";
import { Provider } from "react-redux";
import Store from "../src/redux/store";
import React from "react";
describe("Input", () => {
  it("should render", () => {
    render(
      <Provider store={Store}>
        <Input
          id="pomodoro"
          label="pomodoro"
          value={2}
          type="number"
          name="pomodoro"
          min={1}
          key={"pomodoro"}
        />
      </Provider>
    );
    const input = screen.getByLabelText("input-timer");
    expect(input).toBeInTheDocument();
    const label = screen.getByLabelText("pomodoro");
    expect(label).toBeInTheDocument();
  });
});
