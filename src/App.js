import './App.css';
import { Home } from './Pages/Home';
import { Task } from './Pages/Task';
import { DefaultLayout } from './Components/DefaultLayout';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    
      <BrowserRouter>
        <DefaultLayout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/task/:id" component={Task} />
          </Switch>
          </DefaultLayout>
      </BrowserRouter>
    
      );
}

      export default App;
