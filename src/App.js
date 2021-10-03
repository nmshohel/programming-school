import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';


import Contact from './components/Contact/Contact';
import Teachers from './components/Teachers/Teachers';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
            <BrowserRouter>
                <Navbar></Navbar>
                <Switch>
                        <Route path="/home">
                          <Home></Home>
                        </Route>

                </Switch>
            <Footer></Footer>
            </BrowserRouter>

    </div>
  );
}

export default App;
