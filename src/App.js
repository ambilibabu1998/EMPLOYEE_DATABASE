
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home, List, Login, Register, Create, Update,  Holiday, Profile } from "./components"
import './App.scss';
import Leavess from './components/pages/Leave';

function App() {
  //console.log(Login.token,Login.username,Login.email);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/list" component={List}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route exact path="/add-user" component={Create}></Route>
        <Route exact path="/update/:id" render={(props) => <Update {...props} />}></Route>
        <Route exact path="/leave" component={Leavess}></Route>
        <Route exact path="/holiday-list" component={Holiday}></Route>
        <Route exact path="/profile" component={Profile}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
