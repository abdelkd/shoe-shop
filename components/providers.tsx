"use client";

import { store, persistor } from "@/services/state/store";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {children}
      </PersistGate>
    </Provider>
  );
}
