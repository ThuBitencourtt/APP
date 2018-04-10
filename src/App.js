import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.js';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Objetos</h1>
      </header>
      {this.props.objeto.map(objeto =>
        <section>

        <h3>
        Encontrados

        </h3>
        <p>
        Nome
        <input ref ={input=>objeto = input} type = "text" />
        </p>
        <p>
        Telefone
        <input ref ={input=>objeto = input} type = "text" />
        </p>
        <p>
        Objeto encontrado
        <input ref ={input=>objeto = input} type = "text" />
        </p>
        <p>
        Local encontrado
        <input ref ={input=>objeto = input} type = "text" />
        </p>
        <p>
        Cor
        <input ref ={input=>objeto = input} type = "text" />
        </p>


        {objeto.encontrado.map(encontrado =>
          <p>{encontrado}</p>
        )}
        <h3>
        Perdidos
        </h3>

        <p>
        Nome
        <input ref ={input=>objeto = input} type = "text" />
        </p>
        <p>
        Telefone
        <input ref ={input=>objeto = input} type = "text" />
        </p>
        <p>
        Objeto perdidos
        <input ref ={input=>objeto = input} type = "text" />
        </p>
        <p>
        Local perdidos
        <input ref ={input=>objeto = input} type = "text" />
        </p>
        <p>
        Cor
        <input ref ={input=>objeto = input} type = "text" />
        </p>
        {objeto.perdido.map(perdido =>
        <div className="AppModo">{perdido}</div>

        )}
        </section>
      )}
      </div>
    );
  }
}

export default App;
