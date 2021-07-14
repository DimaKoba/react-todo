import './App.css';
import { Home } from './Pages/Home';
import { Task } from './Pages/Task';
import { DefaultLayout } from './Components/DefaultLayout';
import { BrowserRouter, Switch, Route, Link, HashRouter } from 'react-router-dom';

function App() {
  return (
    
      <HashRouter>
        <DefaultLayout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/task/:id" component={Task} />
          </Switch>
          </DefaultLayout>
      </HashRouter>
    
      );
}

      export default App;
