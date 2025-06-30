import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Projects} from "./pages/Projects";
import {Home} from "./pages/Home";
import {NavBar} from "@/components/NavBar.tsx";
import {Footer} from "@/components/Footer.tsx";
import {Box, Flex} from "@chakra-ui/react";

function App() {
    return (
        <Flex direction="column" minH="100vh">
            <BrowserRouter>
                <NavBar/>
                <Box as="main" flex="1">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/projects" element={<Projects/>}/>
                    </Routes>
                </Box>
                <Footer/>
            </BrowserRouter>
        </Flex>
    )
}

export default App
