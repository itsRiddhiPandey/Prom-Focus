import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Store from "../redux/store";
import React from "react";
// interface Props {
//   children: React.ReactElement;
// }
export default function renderWithProviders(Component:React.ComponentType) {
  return render(
    <Provider store={Store}>
      <Component />
    </Provider>
  );
}
