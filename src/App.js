import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Error from './pages/Error'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route  path="/sign-in"><SignIn/></Route>
          <Route  path="/sign-up"><SignUp/></Route>
          <Route  path="/dashboard"><Dashboard/></Route>
          <Route  path="*"><Error/></Route>
        </Switch>
    </Router>
  );
}

export default App;
