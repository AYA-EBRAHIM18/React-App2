import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "jquery/dist/jquery.min.js";
import App from "./App";
import "./index.css";

const root = document.getElementById("root");
const rootElement = ReactDOM.createRoot(root);
rootElement.render(<App />);
