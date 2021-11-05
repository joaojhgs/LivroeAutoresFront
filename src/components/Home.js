import React, { Component } from "react";
//import PubSub from 'pubsub-js';



export default class Home extends Component{

    render(){
        return(
            <>
                <div className="header">
                    <h1>Sistema de cadastro de autores e livros</h1>
                </div>
                <div className="content" id="content">
                    <center><h1>Bem-vindo</h1></center>
                </div>
            </>

        );
    }

}
