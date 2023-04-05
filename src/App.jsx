import { Outlet } from "react-router-dom"
import Footer from "./components/Footer.jsx"
import Header from "./components/Header/Header.jsx"


function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
