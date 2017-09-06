import React, {Component} from 'react' ;
import ReactDOM   from 'react-dom';
import App from './components/app';
import Header     from './components/header';
import {default as Portfolio} from './components/portfolio';
import About      from './components/about';
import Contact    from './components/contact';

let headerModel = {
  title:'REACT Components',
  subt:'Web Developer - Graphic Artist - UX Designer'
};


let portfolioModel = [
  {img:'cabin', link:'http://lightflowtech.com'},
  {img:'cake', link:'http://lynda.com'},
  {img:'circus', link:'http://pluralsight.com'},
  {img:'game', link:'http://tutsplus.com'},
  {img:'safe', link:'http://codeproject.com'},
  {img:'submarine', link:'https://coderprog.com/php/'}
];

let footerModel = [
  {title:'Location', content:'3481 Melrose Place<br/>Beverly Hills, CA 90210'},
  {title:'Around the Web', content:[
    {link:'#', name:'facebook'},
    {link:'#', name:'google-plus'},
    {link:'#', name:'twitter'},
    {link:'#', name:'linkedin'},
    {link:'#', name:'dribbble'}
  ]},
  {title:'About Freelancer', content:'Freelance is a free to use, open source Bootstrap theme created by<br/><a href="http://startbootstrap.com">Start Bootstrap</a>.'}
];

let mv ={
  header:{view:Header, model:headerModel, label:'Home'},
  portfolio:{view:Portfolio, model:portfolioModel, label:'Portfolio'},
  about:{view:About, label:'About'},
  contact:{view:Contact, label:'Contact'},
  footer:{model:footerModel}
}
ReactDOM.render(<App data={mv}/>,  document.getElementById('almighty'));
