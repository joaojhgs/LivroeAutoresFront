import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AutorBox from './components/Autores';
import Home from './components/Home';
import Livros from './components/Livros';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
  <App/>
  <div id="main">
        <Switch>
            <Route exact path="/" component={Home}/>

            <Route path="/autor" component={AutorBox}></Route>

            <Route path="/livros" component={Livros}></Route>
        </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
