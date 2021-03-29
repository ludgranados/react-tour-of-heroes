import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AppRouter from './routers/AppRouter'


const App = () => {
  return (
    <Router>

      <AppRouter />
        
    </Router>
  );
};

export default App;