import "./app.css";
import "./app.scss";
import "../static/fonts/ubuntu-mono.css";
import "../static/fonts/wotfard.css";

import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
