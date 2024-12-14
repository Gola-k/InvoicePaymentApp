import React from "react";
import ReactDOM from "react-dom/client";
import { AbstraxionProvider } from "@burnt-labs/abstraxion";

import App from "./App";
import "./index.css";

import "@burnt-labs/abstraxion/dist/index.css";
import "@burnt-labs/ui/dist/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AbstraxionProvider
      config={{
        contracts: [
          "xion1z70cvc08qv5764zeg3dykcyymj5z6nu4sqr7x8vl4zjef2gyp69s9mmdka",
        ],
      }}
    >
      <App />
    </AbstraxionProvider>
  </React.StrictMode>
);
