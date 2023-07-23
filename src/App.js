import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Greeting from './Greeting';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Greeting} />
      </Switch>
    </Router>
  );
}

export default App;