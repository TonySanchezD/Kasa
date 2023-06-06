import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from './react/pages/home/Home';
import Housing from './react/pages/housing/Housing';
import About from './react/pages/about/About'
import Error from './react/pages/error/Error'

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/kasa" element={<Home />} />

                    <Route path="/Housing" element={<Housing/>} />
                    <Route path="/kasa/Housing" element={<Housing/>} />

                    <Route path="/About" element={<About/>} />
                    <Route path="/kasa/About" element={<About/>} />

                    <Route path="/*" element={<Error/>} />
                    <Route path="/kasa/*" element={<Error/>} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}    

export default App