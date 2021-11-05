import React, { Component } from 'react';
import './css/pure-min.css';
import './css/pure-sidebar.css';
import './css/pure-sidebar.css';
import {Link} from 'react-router-dom';


class App extends Component {
  constructor(){
    super();
    this.state = {lista : [],nome:'',email:'',senha:'', page:''};
    this.AtualizaPagina = this.AtualizaPagina.bind(this);
  }

  AtualizaPagina(pagina){
    this.setState({page:pagina})
  }


  render() {
    return (
      <>
      <div id="menu">
        <div className="pure-menu">
          <a className="pure-menu-heading" href="#company">Company</a>

          <ul className="pure-menu-list">
            <li className="pure-menu-item"><Link to="/" className="pure-menu-link">Home</Link></li>
            <li className="pure-menu-item"><Link to="/autor" className="pure-menu-link">Autor</Link></li>
            <li className="pure-menu-item"><Link to="/livros" className="pure-menu-link">Livro</Link></li>
          </ul>
        </div>
      </div>
      </>
    );
  }
}

export default App;
