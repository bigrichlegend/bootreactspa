import React, {Component} from 'react' ;


export default class Section extends Component {
  render(){
    return(
      <section className={this.props.className} id={this.props.id}>
        <div className="container">
          <h2 className="text-center">{this.props.title}</h2>
          <hr className="star-primary"/>
          <div className="row">
          {this.props.children}
          </div>
        </div>
      </section>
    )
  }

}
