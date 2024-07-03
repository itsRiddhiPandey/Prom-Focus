import { fireEvent, render, screen } from "@testing-library/react";

import App from "../src/App";
import React from "react";
import { Provider } from "react-redux";
import Store from "../src/redux/store";
import renderWithProviders from "../src/utils/test.utls";
describe("App", () => {
  it("jest running", () => {
    expect(true).toBe(true);
  });
  it("should render", () => {
    render(
      <Provider store={Store}>
        <App />
      </Provider>
    );
    const linkElement = screen.getByText(/Promofocus/i);
    expect(linkElement).toBeInTheDocument();
  });
  it("should open settings menu on clicking the settings function and do close on pressing the buttons to close",()=>{
         renderWithProviders(App);
         const settingsButton = screen.getByText(/Settings/i);
         fireEvent.click(settingsButton);
         const settingsMenu = screen.getByTestId("settingsmenu");
         expect(settingsMenu).toBeInTheDocument();
         fireEvent.click(settingsButton);
         expect(settingsMenu).not.toBeInTheDocument();
  })
  it("should change the value of the input time when user changes the parameters in the settings input",()=>{
    renderWithProviders(App);
    const settingsButton = screen.getByText(/Settings/i);
    fireEvent.click(settingsButton);
    const input = screen.getAllByLabelText("input-timer");
    fireEvent.change(input[0], { target: { value: 10} });
    expect(input[0]).toHaveValue(10);
  })
});
