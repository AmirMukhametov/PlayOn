import { Outlet } from "react-router-dom"
import { Header } from "widgets/Header"
import { routesConfig } from "./routing/routesConfig"


function App() {

  return (
    <div className="app">
      <Header routes={routesConfig}/>
      <Outlet />
    </div>
  )
}

export default App
