import {Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'

import './App.css'

const App = () => (
  <Switch>
    <Header />
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
  </Switch>
)

export default App
