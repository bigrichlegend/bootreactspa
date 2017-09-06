import React, {Component} from 'react' ;
import Section from "./section";


class PortfolioItem extends Component {
  constructor(props){
    super(props);
    this.onUpdateImageState = this.onUpdateImageState.bind(this);
    this.state = {hasImage:true};//State is object with key value pair
  }
  onUpdateImageState(){
    this.setState({hasImage:false});
    setTimeout(()=>{
      this.setState({hasImage:true});
    }, 500)
  }
  render(){
    let path=`img/portfolio/${this.props.mydata.img}`+'.png';
    return(
      <div onClick={this.onUpdateImageState} className="col-sm-4 portfolio-item">
        <a className="portfolio-link" href={this.props.mydata.link} target ="_blank" data-toggle="modal">
          <div className="caption">
            <div className="caption-content">
              <i className="fa fa-search-plus fa-3x"></i>
            </div>
          </div>
          {this.state.hasImage ? <img className="img-fluid" src={path} alt=""/> : null}
        </a>
      </div>
    )
  }
}
export default class Portfolio extends Component{
  render(){
    {/* We are now sending data portfolioModel so we have to process that */}
    let children = [];
    for(let item of this.props.data){
      children.push(<PortfolioItem mydata={item} key={children.length}/>);
    }
    return(
      <Section id="portfolio" title="Portfolio">
        {children}
      </Section>

    )
  }
}
