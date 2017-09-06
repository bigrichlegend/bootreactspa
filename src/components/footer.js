import React, {Component} from 'react' ;
import PropTypes from 'prop-types';

class Element extends Component {
  render() {
    return (
      <div className="footer-col col-md-4">
        <h3>{this.props.myTitle}</h3>
        {this.props.children}
      </div>
    )
  }
}
class TextFooter extends Component {
  render() {
    return (
      <Element myTitle={this.props.title} >
        <p>{this.props.content}</p>
      </Element>
    )
  }
}
class SocialLink extends Component {
  render() {
    let className = 'fa fa-fw fa-' + this.props.name;
    return (
      <li className="list-inline-item">
        <a className="btn-social btn-outline" href={this.props.link}>
          <i className={className}></i>
        </a>
      </li>
    )
  }
}
class ComplexFooter extends Component {
  render() {
    let children = [];
    for (let sl of this.props.content) {
      children.push(<SocialLink key={sl.name} {...sl} />);
    }
    return (
      <Element myTitle={this.props.title} >
        <ul className="list-inline">
          {children}
        </ul>
      </Element>
    )
  }
}
export default class Footer extends Component {
  render() {
    console.log('Rich says :'+this.props.data.model[0]);
    return (
      <footer className="text-center">
        <div className="footer-above">
          <div className="container">
            <div className="row">
              <TextFooter {...this.props.data.model[0]} />
              <ComplexFooter {...this.props.data.model[1]} />
              <TextFooter {...this.props.data.model[2]} />
            </div>
          </div>
        </div>
        <div className="footer-below">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                Copyright &copy; Your Website 2017
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

TextFooter.propTypes = {
  title: PropTypes.string,
  content: PropTypes.node
}
