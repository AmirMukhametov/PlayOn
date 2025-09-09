import { Outlet } from "react-router-dom"
import { Header } from "widgets/Header"
import { routesConfig } from "./routing/routesConfig"
import { Footer } from "widgets/Footer"
import { Container } from "shared/ui"

function App() {

  return (
    <div className="app">
      <Header routes={routesConfig}/>
      <Container><Outlet /></Container>
      <Footer/>
    </div>
  )
}

export default App
