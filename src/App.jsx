import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './components/Home';
import Playground from './components/Playground';
import Counter from './components/Counter';
import RegistrationForm from './components/RegistrationForm';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';

const App = (props) => {
  return (
    <>
      <Navbar />
      <div className='p-5'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/registration-form' component={RegistrationForm} />
          <Route exact path='/counter' component={Counter} />
          <Route exact path='/playground' component={Playground} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </>
  );
};

export default App;
