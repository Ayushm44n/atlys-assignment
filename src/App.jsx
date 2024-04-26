import { Switch, Route, Router, Redirect } from 'react-router'
import { createBrowserHistory } from "history"
import "antd/dist/antd.css"
import Login from './components/Login'
// import './App.css'
import Dashboard from './components/Dashboard'

const history = createBrowserHistory()


function App() {

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Router history={history}>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Redirect path="/login" />
          </Switch>
        </Router>
    </div>
  )
}

export default App
