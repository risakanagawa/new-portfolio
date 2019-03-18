import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { selectedProject } from "../action";

class Works extends Component {
  onSelectedProject = project => {
    console.log(project);
    this.props.selectedProject(project);
    this.props.history.push("/work");
  };

  renderList() {
    return this.props.projects.map((project, idx) => {
      return (
        <div
          data-filter-key={project.type}
          key={idx}
          style={{
            background: `url('${project.img}')`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
          className="project-item c-btn c-btnEf"
          onClick={e => this.onSelectedProject(project)}
        >
          <a>
            <div className="c-btnEf__bg" />
            <div className="c-btnEf__text">CHECK</div>
          </a>
        </div>
      );
    });
  }

  render() {
    return (
      <div  id='work' className="work-container">
        <div className="work-heading">
          <h1>Works</h1>
        </div>
        <div className="work-table container">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { projects: state.projects.projects };
};

export default connect(
  mapStateToProps,
  { selectedProject }
)(withRouter(Works));
