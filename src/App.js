import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import ServiceList from './components/Dashboard/ServiceList/ServiceList';
import Review from './components/Dashboard/Review/Review';
import AllServicesList from './components/Dashboard/AllServicesList/AllServicesList';
import AddServices from './components/Dashboard/AddServices/AddServices';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import NotFound from './components/NotFound/NotFound';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <PrivateRoute path="/order/:id">
                <Dashboard/>
              </PrivateRoute>
              <Route path="/order">
                <Dashboard/>
              </Route>
              <Route path="/login">
                <Login/>
              </Route>
              <Route path="/serviceList">
                <ServiceList/>
              </Route>
              <Route path="/review">
                <Review/>
              </Route>
              <PrivateRoute path="/allServiceList">
                <AllServicesList/>
              </PrivateRoute>
              <Route path="/addService">
                <AddServices/>
              </Route>
              <Route path="/makeAdmin">
                <MakeAdmin/>
              </Route>
              <Route path="*">
                <NotFound/>
              </Route>
            </Switch>
          </Router>
    </UserContext.Provider>
  );
}

export default App;
