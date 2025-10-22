import { useRoutes } from 'react-router-dom'
import { Home } from '@pages'

function Routes({progressValue, isComplete}) {
    const routes = useRoutes([
        {
            path: '/',
            element: <Home progressValue={progressValue} isComplete={isComplete} />,
        },
    ])
    return routes;    
}

export default Routes