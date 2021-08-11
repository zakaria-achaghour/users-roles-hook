import React from 'react';
import { Redirect, Route ,Switch} from 'react-router-dom';


import Users from './components/admin/users/Users';
import ShowUser from './components/admin/users/ShowUser';
import Roles from './components/admin/roles/Roles';
import ShowRole from './components/admin/roles/ShowRole';
import Home from './components/layouts/Home';
import Layout from './components/layouts/Layout';
import Register from './components/auth/Register';
import Login from './components/auth/Login';


import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Layout>
    <Switch>
    <Route exact path='/'  > <Redirect to='/home' /> </Route>
      <Route exact path='/home' component={Home} />
      <Route exact path='/users' component={Users} />
      <Route  path='/users/:id' component={ShowUser} />
      <Route exact path='/roles' component={Roles} />
      <Route  path='/roles/:id' component={ShowRole} />
      <Route  path='/register' component={Register} />
      <Route  path='/login' component={Login} />

      

    </Switch>
    </Layout>
  );
}

export default App;
