import ReactDOM from 'react-dom'
import App from './App'
import './index.scss'
import $ from 'jquery';

ReactDOM.render(<App />, document.getElementById('root'))

let popupAction = () =>{
    document.querySelector('.login').addEventListener('click', (e)=> {  
        e.preventDefault(); 
        document.querySelector('.modal-register').classList.add('show');
    })
    document.querySelector('.close').addEventListener('click', (e)=> {  
        e.preventDefault(); 
        document.querySelector('.modal-register').classList.remove('show');
    })
    document.querySelector('.modal-register').addEventListener('click', (e)=> {  
        e.preventDefault(); 
        document.querySelector('.modal-register').classList.remove('show');
    })
    document.querySelector('.btn--weather').addEventListener('click', (e)=> {  
        e.preventDefault(); 
        document.querySelector('.modal-weather').classList.add('show');
    })
    document.querySelector('.modal-weather').addEventListener('click', (e)=> {  
        e.preventDefault(); 
        document.querySelector('.modal-weather').classList.remove('show');
    })
    
  }
  popupAction();

 document.querySelector('.burger').addEventListener('click', (e)=> {  
        e.preventDefault(); 
        document.querySelector('.dropmenu').classList.toggle('show');
    })
