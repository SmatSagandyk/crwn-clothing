import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component.jsx';
import {auth} from './firebase/firebase.utils';



class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null,
    }
  }
  
  unsubscribeFromAuth = null;
  
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({currentUser: user})

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() { return (
    <div>
      <Header currentUser={this.state.currentUser} />
        {console.log(this.state.currentUser)}
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInSignUpPage} />
      </Switch>
    </div>
  );
}
}

export default App;