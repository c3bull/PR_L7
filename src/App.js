import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router-dom";
import {Redirect} from 'react-router';
import Posts from './components/posts';
import Home from "./components/home";
import NavBar from "./components/navbar";
import NotFound from "./components/notFound";

function App() {
    return (
        <div className="container-fluid">
            <NavBar/>
            <div className="container">
                <div className="content">
                    <Switch>
                        <Route path="/posts"
                               component={Posts}/>}
                        />
                        <Route path="/" exact component={Home}/>
                        <Route path="/not-found" exact component={NotFound}/>
                        <Redirect to="/not-found"/>
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default App;
