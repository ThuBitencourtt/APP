import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const objeto = [
  {

    encontrado: [


    ],
    perdido: [
    
    ]
  },

]

ReactDOM.render(<App objeto = {objeto}/>, document.getElementById('root'));
registerServiceWorker();
