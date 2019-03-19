import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Project extends Component {
  goBack = () => {
    this.props.history.goBack();
}

  renderProject() {
    return this.props.selectedProject.map((project, i) => {
      return (
        <div key={i} className="project-wrapper">
        <div className='project-left'>
          <h1 key={i}>
            {project.name}
          </h1>
            <div
              style={{
                background: `url('${project.mockup ? project.mockup : project.img}')`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
              className='project-img'
            />
            </div>
            <div className='project-right'>
            <ul>
              {project.technology.map((tech, idx) => {
                return <li key={idx}>💡 {tech}</li>;
              })}
            </ul>
            {project.url ? (
              <a href={project.url} target='_blank' className="github-btn">
                Check it on Github!
              </a>
            ) : null}
          </div>
          <button className='back-btn' onClick={this.goBack}><FontAwesomeIcon icon={["fas", "arrow-left"]} size="2x" /></button>

        </div>
      );
    });
  }
  render() {
    return <div className="project-container">{this.renderProject()}</div>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { selectedProject: state.selectedProject };
};

export default connect(mapStateToProps)(Project);
