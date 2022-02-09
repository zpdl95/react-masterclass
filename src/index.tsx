import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import App from "./App";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        {/* <ThemeProvider> 컴포넌트의 하위 컴포넌트는 theme 변수를 사용할 수 있다. */}
        <App />
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
