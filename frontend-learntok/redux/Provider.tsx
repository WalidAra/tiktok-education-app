"use client";

import { Provider } from "react-redux";
import { userStore } from "./store/store";
import Setter from "./provider/Setter";

type Props = {
  children: React.ReactNode;
};

const ReduxProvider = ({ children }: Props) => {
  return (
    <Provider store={userStore}>
      <Setter>{children}</Setter>
    </Provider>
  );
};

export default ReduxProvider;
