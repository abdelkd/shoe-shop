"use client";

import { store } from "@/services/state/store";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";

export default function Providers({ children }: PropsWithChildren) {
  return <Provider store={store}>{children}</Provider>;
}
