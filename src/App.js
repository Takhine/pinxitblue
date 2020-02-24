import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// Components
import Home from './pages/Home';
import Layout from './Layout';
function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route path="/" exact component={Home} />
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
