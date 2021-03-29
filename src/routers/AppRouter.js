import { Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard'
import Heroes from '../pages/Heroes'
import Hero from '../pages/Hero'
import Navbar from '../components/Navbar'

const AppRouter = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Switch>
                    <Route path='/' exact component={Dashboard} />
                    <Route path='/heroes' exact component={Heroes}/>
                    <Route path='/heroes/:heroId' component={Hero} />
                </Switch>
            </div>
        </div>
    );
}

export default AppRouter;