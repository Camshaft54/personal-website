import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Projects} from "./pages/Projects";
import {Home} from "./pages/Home";
import {NavBar} from "@/components/NavBar.tsx";

function App() {
    return (
        <>
            <NavBar/>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/projects" element={<Projects/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default App
