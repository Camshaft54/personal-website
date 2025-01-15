import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Projects} from "./pages/Projects";
import {Home} from "./pages/Home";
import {NavBar} from "@/components/NavBar.tsx";
import {Footer} from "@/components/Footer.tsx";

function App() {
    return (
        <div>
            <NavBar/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    )
}

export default App
