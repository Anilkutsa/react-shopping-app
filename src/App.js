import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";

import ProductDetails from './components/product-details/product-details.components';
import Home from './routes/home/home.components';
import Authentication from './routes/authentication/authentication.component';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path='/product-details/:productId' render={routerProps => <ProductDetails {...routerProps} />  }/>
          <Route exact path='/' component={Home} />
          <Route exact path='/auth' component={Authentication } />
          <Route render={() => <h1>Page Not Found</h1>} />
        </Switch>
    </div>
  );
}

export default App;
