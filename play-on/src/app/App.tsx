import { Outlet, useLocation  } from "react-router-dom";
import { Header } from "widgets/Header";
import { routesConfig, authRoutesConfig } from "./routing/routesConfig";
import { Footer } from "widgets/Footer";
import { PageWrapper } from "widgets/Layout/PageWrapper";
import { Container } from "shared/ui"
import { routesMasks } from '../shared/config/routesMasks'


function App() {
  const location = useLocation()
  const isAuthPage = [routesMasks.signup.mask ,routesMasks.login.mask].includes(location.pathname)

  const headerRoutes = isAuthPage ? authRoutesConfig : routesConfig;
  const showFooter = !isAuthPage
  return (
    <div className="app">
      <Header routes={headerRoutes} />
      <PageWrapper>
        <Outlet />
      </PageWrapper>
      {showFooter && <footer/>}
    </div>
  );
}

export default App;
