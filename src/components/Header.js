import React, { Component } from "react";
import Navigation from "../partials/Navigation";
import TypeIt from "typeit";

let screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
let isDesktop =  screenWidth > 400;
let MAX =  isDesktop? 6 : 4;
let RADIUS =isDesktop ? 50 : 30;
let FPS = 25;
let CENTER = isDesktop ?{ x: 100, y: 200 }:{ x: 10, y: 20 };
let x_speed = 3;
let y_speed = 3;
let canvas, ctx, timer, point;
let stats;
let mouseFlag = true;

var Point = function(c, r, rota) {
  this.x, this.y;
  this.centerX = c.x;
  this.centerY = c.y;

  this.radian = rota * (Math.PI / 180);
  this.radius = r;

  this.speed = Math.random() * 10 + 5;
  this.r = Math.random() * 2 + 1;
  this.rota = 0;

  this.update = function() {
    let plus = Math.cos(this.rota * (Math.PI / 180)) * this.r;
    if (this.centerX + 50 > canvas.width) {
      x_speed = -3;
    } else if (this.centerX <= 50) {
      x_speed = 3;
    }
    if (this.centerY + 50 > canvas.height) {
      y_speed = -3;
    } else if (this.centerY <= 50) {
      y_speed = 3;
    }
    this.centerX = this.centerX + x_speed;
    this.centerY = this.centerY + y_speed;

    this.y_speed = 3;
    this.radius += plus;

    let cos = Math.cos(this.radian) * this.radius;
    let sin = Math.sin(this.radian) * this.radius;

    this.x = cos + this.centerX;
    this.y = sin + this.centerY;

    this.rota += this.speed;

    if (this.rota > 360) {
      this.rota -= 360;
    }
  };
};

function initialize() {
  var rota = 360 / MAX;
  var i;
  for (i = 0; i < MAX; i++) {
    point[i] = new Point(CENTER, RADIUS, rota * i);
  }
}

function update() {
  for (var i = 0; i < MAX; i++) {
    point[i].update();
  }

  draw();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (mouseFlag) {
    ctx.fiiStyle = "rgba(255, 0, 0, 0)";
  } else {
    ctx.strokeStyle = "rgba(255, 0, 0, 0.5)";
    ctx.lineWidth = 1;
  }

  ctx.beginPath();

  var xc1 = (point[0].x + point[MAX - 1].x) / 2;
  var yc1 = (point[0].y + point[MAX - 1].y) / 2;

  ctx.moveTo(xc1, yc1);

  for (var i = 0; i < MAX - 1; i++) {
    var xc = (point[i].x + point[i + 1].x) / 2;
    var yc = (point[i].y + point[i + 1].y) / 2;

    ctx.quadraticCurveTo(point[i].x, point[i].y, xc, yc);
  }

  ctx.quadraticCurveTo(point[i].x, point[i].y, xc1, yc1);

  ctx.closePath();

  if (mouseFlag) {
    ctx.fill();
  } else {
    ctx.stroke();
  }

  if (mouseFlag) {
    return;
  }

  for (i = 0; i < MAX; i++) {
    ctx.fillStyle = "rgba(255, 90, 90, 1)";
    ctx.beginPath();
    ctx.arc(point[i].x, point[i].y, 2, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
  }
}

function changeFlag() {
  mouseFlag = mouseFlag ? false : true;
}

window.onload = function(e) {
  canvas = document.getElementById("canvas");
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  ctx = canvas.getContext("2d");
  ctx.fillStyle = "rgba(255, 90, 90, 1)";
  point = [];

  initialize();

  timer = setInterval(update, 1000 / FPS);
};

class Header extends Component {
  componentDidMount() {
    this.Typeit();
  }

  Typeit() {
    new TypeIt("#ele", {
      strings: ["Hello!", "Ahoj!", "Hallo!", "こんにちは!", "Hello."],
      speed: 150,
      breakLines: false,
      waitUntilVisible: true
    }).go();
  }

  render() {
    return (
      <div className="header-container">
        <Navigation />
        <div className="header-contents">
          <div className="header-left">
            <span id="ele" />
            <div className="header-left-text">
              <p>
                Front-end Engineer currently based in beautiful Vancouver,
                Canada.
              </p>
            </div>
          </div>
          <div className="header-right">
            <div id="canvasArea">
              <canvas id="canvas" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
