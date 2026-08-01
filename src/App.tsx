import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NavBar} from "@/components/NavBar.tsx";
import {Footer} from "@/components/Footer.tsx";
import {Box, Flex} from "@chakra-ui/react";
import React, {Suspense} from "react";

const Home = React.lazy(() => import('./pages/Home'));
const Projects = React.lazy(() => import('./pages/Projects'));

function App() {
    return (
        <Flex direction="column" minH="100vh">
            <BrowserRouter>
                <NavBar/>
                <Box as="main" flex="1">
                    <Suspense fallback={null}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/projects" element={<Projects />} />
                        </Routes>
                    </Suspense>
                </Box>
                <Footer/>
            </BrowserRouter>
        </Flex>
    )
}

export default App
