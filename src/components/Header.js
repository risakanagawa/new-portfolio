import React, { Component } from "react";
import Navigation from "../partials/Navigation";
import TypeIt from "typeit";

var MAX = 6;
var RADIUS = 50;
var FPS = 25;
var CENTER = { x: 100, y: 200 };
let x_speed = 3;
let y_speed = 3;
var directionX = 'right'
var canvas, ctx, timer, point;
var stats;
var mouseFlag = true;

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
    var plus = Math.cos(this.rota * (Math.PI / 180)) * this.r;
    if(this.centerX > canvas.width - 100) {
      x_speed = -3
    }else if(this.centerX <= 100){
      x_speed =3    
    }
      this.centerX = this.centerX + x_speed;
    
    this.y_speed = 3;
    this.radius += plus;

    var cos = Math.cos(this.radian) * this.radius;
    var sin = Math.sin(this.radian) * this.radius;

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
            <h2 className="canvas-backgrou">
              <div id="canvasArea">
                <canvas id="canvas" width="400" height="400" />
              </div>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
