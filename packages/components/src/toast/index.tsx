import { ToastContainer, toast } from "react-toastify";
export { toast };

import "./style.css";

export const ToastProvider = () => (
  <ToastContainer position="top-right" autoClose={3000} />
);
