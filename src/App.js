import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, About, Contacts, Projects } from "./pages";
import { Navbar, Footer } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={Contacts} path='/contacts' />
        <Route component={Projects} path='/projects' />

      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
