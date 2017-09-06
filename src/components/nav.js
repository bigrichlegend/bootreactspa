import React, {Component} from 'react' ;
import PropTypes from 'prop-types';

class NavItem extends Component{
    static get defaultProps(){
        return{
            className:"nav-item",
            theD:"nav-link"
        };
    }
    render(){
      //console.log(this.props);
        return(
            <li className={this.props.className}><a onClick={this.props.onClick} className={this.props.theD} href={this.props.link}>{this.props.name}</a></li>
        );
    }
}
export default class Nav extends Component {

    render() {
        let a = this.props.data.slice(0);
        a.forEach((e, i, a) =>{
          a[i] = <NavItem onClick={this.props.onClick} key={i} {...e} />
        });

        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <a className="navbar-brand" href="#page-top">Start Bootstrap</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
          <i className="fa fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        {a}
                    </ul>
                </div>
            </nav>
        )
    }
}
