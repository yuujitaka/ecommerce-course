import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => { 
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        //https://firebase.google.com/docs/firestore/query-data/listen
        userRef.onSnapshot( snapShot => {
          setCurrentUser({ id:snapShot.id, ...snapShot.data() });
        })
        
      } else {
        setCurrentUser(userAuth);
      }
    });

    //https://reactjs.org/docs/hooks-effect.html
    return unsubscribeFromAuth;

  }, [])

  return (
    <div>
      <Header currentUser={currentUser}/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignUpPage} />
      </Switch>
    </div>
    
  );
}

export default App;
