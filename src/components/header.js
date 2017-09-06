import React, {Component} from 'react' ;

export default class Header extends Component {
  render(){
    let {title, subt} = this.props.data;
    return(
      <header className="masthead">
        <div className="container">
          <img className="img-fluid" src="img/profile.png" alt=""/>
          <div className="intro-text">
            <span className="name">{title}</span>
            <hr className="star-light"/>
            <span className="skills">{subt}</span>
          </div>
        </div>
      </header>
    )
  }
}
