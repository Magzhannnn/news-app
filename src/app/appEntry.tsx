import ReactDOM from "react-dom/client";
import "@/shared/index.css";
import { Provider } from "react-redux";
import { ThemeProvider } from "@/app/providers/ThemeContext";
import { store } from "@/app/appStore.ts";
import BaseLayout from "./layouts/baseLayout";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <Provider store={store}>
      <BaseLayout />
    </Provider>
  </ThemeProvider>
);
