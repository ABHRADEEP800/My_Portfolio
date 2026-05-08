// src/main.tsx
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { registerSW } from "virtual:pwa-register";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { BrowserRouter } from "react-router-dom";

registerSW({ immediate: true });

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <GoogleReCaptchaProvider
      reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY ?? ""}
      scriptProps={{ async: true, defer: true }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GoogleReCaptchaProvider>
  </Provider>
);
