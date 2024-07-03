import { render, screen } from "@testing-library/react";
import React from "react";
import Header from "../src/components/Header";
import { Provider } from "react-redux";
import Store from "../src/redux/store";
import renderWithProviders from "../src/utils/test.utls";

describe("Header", () => {
  it("should render the Promfocus text", () => {
renderWithProviders(Header)
    const headertext = screen.getByText(/Promofocus/i);
    //     /{your text}/ it represents that case of the letter while finding from the render
    expect(headertext).toBeInTheDocument();
  });
  it("should display a settings button which onclick functions",()=>{
    render(
      <Provider store={Store}>
        <Header />
      </Provider>
    );
    const settingsbutton = screen.getByText(/Settings/i);
    expect(settingsbutton).toBeInTheDocument();
  })
});
