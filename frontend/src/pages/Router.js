import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Splash } from './Splash'
import { Feed } from './Feed'

const routes = [
    Splash,
    Feed
]

function Router(){
    return (
        <BrowserRouter>
            {routes.map( ({ path, Controller, View }) => (
                <Route exact path={path} component={() => <Controller View={View} /> } />
            ))}
        </BrowserRouter>
    )
}

export { Router }