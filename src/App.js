import { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';

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
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" render={() => currentUser ? (<Redirect to='/'/>) : (<SignInSignUpPage/>) } />
      </Switch>
    </div>
    
  );
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
