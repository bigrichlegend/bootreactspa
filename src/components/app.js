import React, {Component} from 'react' ;
import Nav from './nav';
import Footer    from './footer';
import CSS from '../css/freelancer.css';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state ={section:location.hash};

    this.map = new Map();
    this.map.set('footer', Footer);
    this.onClickLink = this.onClickLink.bind(this);

    window.onhashchange = (e) => {
      if(this.map.has(location.hash)){
        this.setState({section:location.hash});
      }
    }
  }

  onClickLink(e){
    //e.preventDefault();
    //console.log("You clicked?");
  }

  render(){
  console.log(this.props.data.footer);
    let children = [],
        navModel =[];
      for(let key in this.props.data){
        let View = this.props.data[key].view;
        let {label, model} = this.props.data[key];
        if(!View && this.map.has(key)){
          View = this.map.get(key);
        }
        if(View){
          console.log(View);
          if(label){
            this.map.set("#"+key, View);
            this.map.set(View, model);
            navModel.push({link:"#"+key, name:label})
          }
        }
      }
      if(this.map.has(this.state.section)){
        const Tag = this.map.get(this.state.section);
        children = [<Tag key={this.state.section} data={this.map.get(Tag)} />]
      }
      return(
        <div>
          <Nav onClick={this.onClickLink} data={navModel}/>
          {children}
          <Footer data={this.props.data.footer}/>
        </div>
      )
    }
}
{
  /*
  <Nav onClick={this.onClickLink} data={this.props.data.nav}/>
  <Header />
  <Portfolio data={this.props.data.portfolio} />
  <About />
  <Contact />
  <Footer data={this.props.data.footer}/>
  */
}
