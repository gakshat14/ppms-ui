import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Entry from './Components/Entry';
import Dashboard from './Components/Dashboard';


export const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/" component={Entry}/>
                <Route exact path="/dashboard" component={Dashboard} />
                <Route component={Entry}/>
            </Switch>
        </main>
    )
}