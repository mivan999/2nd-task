import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {Favourite} from './pages/Favourite'
import {Youtube} from './pages/Youtube'
import {AuthPage} from './pages/AuthPage'

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/youtube" exact>
                    <Youtube />
                </Route>
                <Route path="/favourite" exact>
                    <Favourite />
                </Route>
                <Redirect to="/youtube" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}