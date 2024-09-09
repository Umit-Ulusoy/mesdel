import { useRoutes } from 'react-router-dom'
import { Home } from '../pages/index'

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