import React from 'react'
import {Link,Switch,Router,Route,Redirect} from 'react-router-dom'
import history from './history'
import App from './App'
import Login from './pages/login'
import Home from './pages/Home'
import Admin from './pages/admin'
import Order from './pages/order'
export default class ERoute extends React.Component{
    
    render(){
        return(
            <Router history={history}>
                <Switch>
                    <Route path='/'>
                        <App>
                            <Switch>
                                <Route exact path='/' component={Login}></Route>
                                <Route path='/home'>
                                    <Home>
                                        <Switch>
                                            <Route>
                                                <Route exact path='/home' component={Admin}></Route>
                                                <Route exact path='/home/order' component={Order}></Route>
                                                <Redirect to='/home' />
                                            </Route>
                                        </Switch>
                                    </Home>
                                </Route>
                            </Switch>
                            <Redirect to='/' />
                        </App>
                    </Route>
                </Switch>
            </Router>
        )
    }
}