import React from 'react'
import {Link,Switch,Router,Redirect} from 'react-router-dom'
import './history'
export default class ERoute extends React.Component{
    
    render(){
        return(
            <Router history={history}>

            </Router>
        )
    }
}