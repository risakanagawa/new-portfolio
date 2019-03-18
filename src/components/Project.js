import React, { Component } from "react";
import { connect } from "react-redux";

class Project extends Component {

    renderProject() {
        return  this.props.selectedProject.map( (project, i) => {
            return (
                <div key={i} className='project-wrapper'>
                <h1 className='project-heading' key={i}>{project.name}</h1>
                <div>
                {/* <img src={project.mockup? project.mockup : project.img} /> */}
                <ul>
                    {project.technology.map((tech, idx) => {
                       return  <li key={idx}>{tech}</li>
                    })}
                </ul>
                    { project.url? <a href={project.url} className='resume-btn' >Check it on Github!</a> : null }
                </div>
                
                </div>
            )
        })
    }
  render() {
    return (
      <div className="project-container">
            {this.renderProject()}
      </div>
    );
  }
}


const mapStateToProps = state => {
    console.log(state);
    return { selectedProject: state.selectedProject };
  };
  
  export default connect(mapStateToProps)(Project);
