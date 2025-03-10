import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import system from "./theme.tsx"
import {ChakraProvider} from "@chakra-ui/react"
import {ColorModeProvider} from "@/components/ui/color-mode.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ChakraProvider value={system}>
            <ColorModeProvider>
                <App />
            </ColorModeProvider>
        </ChakraProvider>
    </React.StrictMode>,
)