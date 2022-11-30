import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from './react/pages/home/Home';
import Housing from './react/pages/Housing';
import About from './react/pages/About'
import Error from './react/pages/Error'

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