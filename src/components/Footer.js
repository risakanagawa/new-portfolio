import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const copyToClipboard = str => {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

class Footer extends Component {
  state = { btnText: "📝 Copy" };

  copyBtn = event => {
    event.preventDefault();
    copyToClipboard("kanagawa.risa@gmail.com");
    document.getElementsByClassName("copy-btn").innerHTML = "Copied!";
    this.setState({ btnText: "👍 Copied!" });
  };
  render() {
    return (
      <footer  id='contact' className="footer">
        <h1>Say Hi!</h1>
        <div className="contact-table">
          <div className="contact-left">
          <div className='contact-info'>
            <h3 onClick={this.copyBtn}>kanagawa.risa@gmail.com</h3>
            <button className="copy-btn" onClick={this.copyBtn}>{this.state.btnText}</button>
            </div>
            <ul className="icon-table">
              <li><a href='https://github.com/risakanagawa' target='_blank'>
                  <FontAwesomeIcon icon={["fab", "github"]} size="2x" /></a></li>
              <li><a href='https://www.linkedin.com/in/risa-kangawa' target='_blank' >
                  <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" /></a></li>
              <li><a href='https://www.instagram.com/kngw/' target='_blank'>
                  <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" /></a></li>
            </ul>
          </div>
        </div>
        <div className='footer-bottom'> Coded with ❤️ by Risa | 2019</div>
      </footer>
    );
  }
}

export default Footer;
