import React, {Component} from 'react' ;
import Section from "./section";

export default class About extends Component {
  render(){
    return(
      <Section className="success" id="about" title="About" >
          <div className="col-lg-4 ml-auto">
            <p>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional LESS stylesheets for easy customization.</p>
          </div>
          <div className="col-lg-4 mr-auto">
            <p>Whether you are a student looking to showcase your work, a professional looking to attract clients, or a graphic artist looking to share your projects, this template is the perfect starting point!</p>
          </div>
          <div className="col-lg-8 mx-auto text-center">
            <a href="#" className="btn btn-lg btn-outline">
              <i className="fa fa-download"></i>
              Download Theme
            </a>
          </div>
      </Section>
    )
  }
}
