import { useRoutes } from 'react-router-dom'
import { Home } from '../pages/index'
import App from '../App'

function Routes() {
    const routes = useRoutes([
        {
            path: '/',
            element: <Home />,
        },
    ])
    return routes;    
}

export default Routes