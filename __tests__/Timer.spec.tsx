import { fireEvent, render,screen } from "@testing-library/react";
import Timer from "../src/components/Timer";
import { Provider } from "react-redux";
import Store from "../src/redux/store";
import React from "react";
describe("Timer", () => {
  it("should render the timer in running mode", () => {
         const mockfunction1=jest.fn();
         const mockfunction2=jest.fn();
         const mockfunction3=jest.fn();
         render(<Provider store={Store}>
                  <Timer ticking={true} next={mockfunction1} start={mockfunction2} stop={mockfunction3} time={26000}/>
         </Provider>)
         expect(screen.getByText("00 : 26")).toBeInTheDocument();
         // stop button working
         const stopbutton = screen.getByText("STOP")
         expect(stopbutton).toBeInTheDocument();
         fireEvent.click(stopbutton);
         expect(mockfunction3).toBeCalled();
         // // start button working
         // const startbutton = screen.getByText("START")
         // expect(startbutton).toBeInTheDocument();
         // fireEvent.click(startbutton);
         // expect(mockfunction2).toBeCalled();
         // next button working
         const nextbutton = screen.getByTestId("next-button")
         expect(nextbutton).toBeInTheDocument();
         fireEvent.click(nextbutton);
         expect(mockfunction1).toBeCalled();

  });
  it("should render the timer in non running mode", () => {
         const mockfunction1=jest.fn();
         const mockfunction2=jest.fn();
         const mockfunction3=jest.fn();
         render(<Provider store={Store}>
                  <Timer ticking={false} next={mockfunction1} start={mockfunction2} stop={mockfunction3} time={26000}/>
         </Provider>)
         expect(screen.getByText("00 : 26")).toBeInTheDocument();
         // start button working
         const startbutton = screen.getByText("START")
         expect(startbutton).toBeInTheDocument();
         fireEvent.click(startbutton);
         expect(mockfunction2).toBeCalled();
  });
});