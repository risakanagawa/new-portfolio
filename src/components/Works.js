import React, { Component } from "react";

const aloha = require("../../public/img/aloha.png");
const instanews = require("../../public/img/instanews.png");
const ponggame = require("../../public/img/ponggame.png");
const inhabitent = require("../../public/img/inhabitent.png");
const devquotes = require("../../public/img/devquotes.png");
const meetup = require("../../public/img/meetup.png");
const dello = require("../../public/img/dello.png");
const design1 = require("../../public/img/dailyUI01.gif");
// import aloha from "../../public/img/aloha.png";
// import instanews from "../../public/img/instanews.png";
// import ponggame from "../../public/img/ponggame.png";
// import inhabitent from "../../public/img/inhabitent.png";
// import devquotes from "../../public/img/devquotes.png";
// import meetup from "../../public/img/meetup.png";
// import dello from "../../public/img/dello.png";
// import design1 from "../../public/img/dailyUI01.gif";

const backImg = [
  { id: 6, type: "development", img: meetup },
  { id: 1, type: "development", img: aloha },
  { id: 2, type: "development", img: instanews },
  { id: 3, type: "development", img: ponggame },
  { id: 4, type: "development", img: inhabitent },
  { id: 5, type: "development", img: devquotes },
  { id: 6, type: "design", img: dello },
  { id: 7, type: "design", img: design1 }
];

class Works extends Component {
  renderList() {
    return backImg.map((img, idx) => {
      return (
        <div
          data-filter-key={img.type}
          key={idx}
          style={{
            background: `url('${img.img}')`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
          className="work"
        />
      );
    });
  }

  render() {
    return (
      <div className='work-container'>
      <div className='work-heading'>
        <h1>Works</h1>
      </div>
        <div className="work-table container">{this.renderList()}</div>
      </div>
    );
  }
}

export default Works;
