import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// styles
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { ResetStyles } from "./styles/ResetStyles";
import { GlobalStyles } from "./styles/GlobalStyles";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <ResetStyles />
            <GlobalStyles />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
