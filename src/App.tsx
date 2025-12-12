
// import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// import HelloWorld  from "./Hello-World/HelloWorld"

import Home from "./pages/Home"
import Tes from "./pages/Tes"


// import About from "./Pages/About"

function App() {

  return (
    <div>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">

        <Router>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tes" element={<Tes />} />
          </Routes>

        </Router>

      </div>
    </div>

  )
}

export default App
