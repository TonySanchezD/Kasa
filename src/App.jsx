import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from './pages/Home/Home';
import Housing from './pages/Housing';
import About from './pages/About'
import Error from './pages/Error'

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Housing" element={<Housing/>} />
                    <Route path="/About" element={<About/>} />
                    <Route path="/*" element={<Error/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}    

export default App