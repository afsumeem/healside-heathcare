import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import Home from './pages/Home/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import ServiceDetail from './pages/ServiceDetail/ServiceDetail/ServiceDetail';
import Login from './pages/Login/Login';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import AboutUs from './pages/AboutUs/AboutUs';
import Doctors from './pages/Doctors/Doctors/Doctors';
import Appointment from './pages/Appoinment/Appointment';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (

    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/home">
              <Home></Home>
            </Route>

            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>

            <PrivateRoute path="/service/:id">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>

            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>

            <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/signup">
              <SignUp></SignUp>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
