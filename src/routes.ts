// pages
import Home from "./pages/home";
import Properties from "./pages/properties";
import Genre from "./pages/genre";

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
        path: '/vis-app-2',
        enabled: true,
        component: Home
    },
    {
        key: 'properties-route',
        title: 'Egenskaper',
        path: '/vis-app-2/properties',
        enabled: true,
        component: Properties
    },
    {
        key: 'genre-route',
        title: 'Topp 3 sjanger',
        path: '/vis-app-2/genre',
        enabled: true,
        component: Genre
    }
]