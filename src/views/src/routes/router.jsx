import { useRoutes } from 'react-router-dom'
import { Home } from '@pages'

function Routes({progressValue}) {
    const routes = useRoutes([
        {
            path: '/',
            element: <Home progressValue={progressValue} />,
        },
    ])
    return routes;    
}

export default Routes