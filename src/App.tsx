import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Landing } from "./pages"

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path={"*"} element={<Navigate replace to={"/"} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
