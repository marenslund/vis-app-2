// pages
import Home from "./pages/home";
import Properties from "./pages/properties";

// other
import {FC} from "react";

// interface
interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: 'home-route',
        title: 'Topp 50 liste',
        path: '/vis-app',
        enabled: true,
        component: Home
    },
    {
        key: 'properties-route',
        title: 'Egenskaper',
        path: '/vis-app/properties',
        enabled: true,
        component: Properties
    }
]