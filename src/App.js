import React, { Component } from 'react';
import './App.css';
import DialogsConteiner from "./components/Dialogs/DialogsConteiner"
import { Route } from "react-router-dom"
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import NavbarConteiner from './components/Navbar/NavbarConteiner';
import FindUsersConteiner from './components/FindUsers/FindUsersConteiner';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initAllComponent } from './redux/appReducer';
import Preloader from './components/Common/Preloader/Preloader';
import { withSuspense } from './hoc/withSuspense';
import store from "./redux/reduxStore"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"

const ProfileContainer = React.lazy(()=>import("./components/Profile/ProfileContainer"))

class App extends React.Component {
  componentDidMount(){
    this.props.initAllComponent()
  }
  render() {
      if(!this.props.componentInit){
        return <Preloader />
      }
      return (
      <div className="app-wrapper">
        <HeaderContainer />
        <NavbarConteiner />
        <div className="app-wrapper-content">
          <Route path="/profile/:userId?" 
            render={withSuspense(ProfileContainer)}
          />
          <Route path="/dialogs" 
            render={ ()=> <DialogsConteiner /> } 
          />
          <Route path="/news" render={ ()=> <News /> } />
          <Route path="/music" render={ ()=> <Music /> } />
          <Route path="/settings" render={ ()=> <Settings /> } />
          <Route path="/find-users" render={ ()=> <FindUsersConteiner />} />
          <Route path="/login" render={ ()=> <Login />} />
        </div>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    componentInit:state.appInit.componentInitialization
  }
}

const AppContainer = connect(mapStateToProps,{ initAllComponent })(App)

const AppFirstProgect = (props) => {
  return <BrowserRouter>
    <Provider store={store}>
        <AppContainer />
    </Provider>
  </BrowserRouter>
}
export default AppFirstProgect