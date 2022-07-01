import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Travel from './pages/Travel'
import Covid from './pages/Covid'
import Prevention from './pages/Prevention'
import About from './pages/About'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/travel'>
            <Travel />
          </Route>
          <Route path='/covid'>
            <Covid />
          </Route>
          <Route path='/prevention'>
            <Prevention />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
