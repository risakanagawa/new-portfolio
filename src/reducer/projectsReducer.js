const aloha = require("../../public/img/aloha.png");
const instanews = require("../../public/img/instanews.png");
const ponggame = require("../../public/img/ponggame.png");
const inhabitent = require("../../public/img/inhabitent.png");
const devquotes = require("../../public/img/devquotes.png");
const meetup = require("../../public/img/meetup.png");
const dello = require("../../public/img/dello.png");
const design1 = require("../../public/img/dailyUI01.gif");
//mockup 
const alohaDesktop = require("../../public/img/alohaDesktop.png");
const instanewsDesktop = require("../../public/img/instanewsDesktop.png");
const inhabitentDesktop = require("../../public/img/inhabitentDesktop.png");
const quotesondevDesktop = require("../../public/img/quotesondevDesktop.png");
const meetupDesktop = require("../../public/img/meetupDesktop.png");
const ponggameDesktop = require("../../public/img/ponggameDesktop.png");

const initialState = {
  projects: [
    {
      name: "Vancouver Meetup Seacher",
      type: "development",
      img: meetup,
      mockup: meetupDesktop,
      technology: ["React", "Redux", "Google Map", "React-Router", "MeetupAPI"],
      url: "https://github.com/risakanagawa/search-events"
    },
    {
      name: "Aloha project",
      type: "development",
      img: aloha,
      mockup: alohaDesktop,
      technology: ["HTML", "CSS", "jQuery"],
      url: "https://github.com/risakanagawa/Aloha"
    },
    {
      name: "Instanews App",
      type: "development",
      img: instanews,
      mockup: instanewsDesktop,
      technology: ["HTML", "CSS", "jQuery", "NYtimesAPI"],
      url: "https://github.com/risakanagawa/instanews"
    },
    {
      name: "Classic Ponggame",
      type: "development",
      img: ponggame,
      mockup: ponggameDesktop,
      technology: ["HTML", "CSS", "JavaScript"],
      url: "https://github.com/risakanagawa/Pong-game"
    },
    {
      name: "Inhabitent",
      type: "development",
      img: inhabitent,
      mockup: inhabitentDesktop,
      technology: ["HTML", "CSS", "jQuery", "PHP", "WordPress"],
      url: "https://github.com/risakanagawa/inhabitent"
    },
    {
      name: "Quotes on Devs",
      type: "development",
      img: devquotes,
      mockup: quotesondevDesktop,
      technology: ["HTML", "CSS", "jQuery"],
      url: "https://github.com/risakanagawa/dev-quotes"
    },
    {
      name: "Dello",
      type: "design",
      img: dello,
      technology: ["Sketch"],
      url: null
    },
    {
      name: "Login Page",
      type: "design",
      img: design1,
      technology: ["Sketch", "Framer"],
      url: null
    }
  ]
};

export default (state = initialState, action) => {
  return state;
};
