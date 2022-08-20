import adapter from "webrtc-adapter";
import { createRoot } from 'react-dom/client';
import { setAppElement } from "react-modal";
import "@monocle/common/index.css";

import App from "./components/App";

document.documentElement.classList.add("dark");
const container = document.getElementById("root");
const root = createRoot(container!);

// react modal
setAppElement("#root");

root.render(<App />);
