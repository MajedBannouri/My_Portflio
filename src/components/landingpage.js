import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import my_photo from '../image/cvcv.png' ;

class Landing extends Component {
  render() {
    return (
      <Grid className="landing-grid">
        <Cell col={12}>
          <img
            src={my_photo}
            alt="avatar"
            className="avatar-img"
          />

          <div className="banner-text">
            <h1>Majed BANNOURI</h1>
            <h5>Software Developer</h5>

            <hr />

            <p>
              Web-Development | JavaScript | React-js | NodeJs  | Express | MongoDB | MongoDB 
              | Java | HTML | CSS | Bootstrap | Android
            </p>

            <div className="social-links">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/majed-bannouri-8791341b4"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>

              {/* Github */}
              <a
                href="https://github.com/MajedBannouri"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>

            

             
            </div>
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Landing;
