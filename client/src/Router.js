import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import App from './App'
import Home from './live/home'
import Correlation from './live/correlation'
import Rsi from './live/rsi'
import Login from './live/login'
import Register from './live/register'
import SignUpPage from './live/SignUpPage';
import ForgotPasswordPage from './live/ForgotPasswordPage';
import MarketPlacePage from './live/MarketPlacePage/MarketPlacePage';
import ProductPage from './live/ProductPage/ProductPage';
import MyPurchasesPage from './live/MyPurchasesPage/MyPurchasesPage';


const LoginRoute = ({ component: Component, ...rest }) => {
  return(
  <Route
    {...rest}
    render={props => (
      !rest.isLoggedIn ? (
        <Component {...props} />
      ) : (
          <Redirect to={{
            pathname: '/marketPlace',
            state: { from: props.location },
          }}
          />
        )
    )}
  />
)};

class Router extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
  }

  setLogin = (isLoggedIn) =>{
    this.setState({ isLoggedIn })
  }

  render(){
    const { isLoggedIn } = this.state
    return (
      <App setLogin={(logIn)=>this.setLogin(logIn)}>
        <BrowserRouter>

          <React.StrictMode>
            <LoginRoute exact {...this.state} path='/' component={Login} />
            <LoginRoute exact {...this.state} path='/login' component={Login} />
            <Route path='/correlation' component={Correlation} />
            <Route path='/rsi' component={Rsi} />
            <Route path='/signup' component={SignUpPage} />
            <Route path='/register' component={Register} />
            <Route path='/forgot-password' component={ForgotPasswordPage} />
            <Route exact path='/marketplace' component={MarketPlacePage} />
            <Route path='/marketplace/:id' component={ProductPage} />
            <Route exact path='/my-purcheses' component={MyPurchasesPage} />
            <Route path='/my-purcheses/:id' render={(props) => <ProductPage {...props} isPurchased={true}  />} />
          </React.StrictMode>

        </BrowserRouter>
      </App>
    )
  }
}

export default Router;
