import {createSystem, defaultConfig} from "@chakra-ui/react";
import "@fontsource-variable/nunito-sans/index.css";

export const system = createSystem(defaultConfig, {
    theme: {
        tokens: {
            fonts: {
                heading: {value: `'Nunito Sans Variable', sans-serif`},
                body: {value: `'Nunito Sans Variable', sans-serif`},
            }
        },
    }
})

export default system;