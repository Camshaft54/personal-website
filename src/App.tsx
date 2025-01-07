import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Projects} from "./pages/Projects";
import {Home} from "./pages/Home";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/projects" element={<Projects />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
