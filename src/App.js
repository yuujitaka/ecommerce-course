import { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';


function App({ setUser, currentUser }) {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => { 
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        //https://firebase.google.com/docs/firestore/query-data/listen
        userRef.onSnapshot( snapShot => {
          setUser({ id:snapShot.id, ...snapShot.data() });
        })
        
      } else {
         setUser(userAuth);
      }
    });

    //https://reactjs.org/docs/hooks-effect.html
    return unsubscribeFromAuth;

  }, [])

  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/signin" render={() => currentUser ? (<Redirect to='/'/>) : (<SignInSignUpPage/>) } />
        <Route exact path="/checkout" component={CheckoutPage}/>
      </Switch>
    </div>
    
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
