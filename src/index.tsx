import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import CarsContextProvider from "./context/cars-context";

import store from "./store/index";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 1000 * 60 } },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <CarsContextProvider>
        <App />
      </CarsContextProvider>
    </Provider>
    <ReactQueryDevtools />
  </QueryClientProvider>
);
