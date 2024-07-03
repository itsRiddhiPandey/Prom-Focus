import { screen } from "@testing-library/react";
import Settings from "../src/components/Settings";
import renderWithProviders from "../src/utils/test.utls";
describe("Settings", () => {
  it("should render settings with proper text", () => {
    renderWithProviders(Settings);
    const settings = screen.getByText(/settings/i);
    const timertext=screen.getByText(/timer/i)
    expect(settings).toBeInTheDocument();
    expect(timertext).toBeInTheDocument();
  });
})